import { useEffect, useMemo, useState } from 'react';
import {
  MESSAGE_TYPES,
  type RuntimeMessage
} from '../shared/messages';
import { STORAGE_KEY, loadState, normalizeState } from '../shared/storage';
import type { AppState, RuntimeResponse, TabItem, TabStatus } from '../shared/types';
import { matchesQuery, sortBatchesByCreatedAtDesc, sortTabsByOriginalIndex } from '../shared/utils';
import { ConfirmDialog } from './components/ConfirmDialog';
import { StatusSection, type BatchGroup } from './components/StatusSection';

const STATUS_ORDER: TabStatus[] = ['inbox', 'doing', 'later', 'done'];

const STATUS_LABEL: Record<TabStatus, string> = {
  inbox: 'Inbox',
  doing: 'Doing',
  later: 'Later',
  done: 'Done'
};

type ConfirmState =
  | { type: 'tab'; tabId: string; label: string }
  | { type: 'batch'; batchId: string; count: number }
  | null;

async function sendRuntimeMessage<T>(message: RuntimeMessage): Promise<RuntimeResponse<T>> {
  return chrome.runtime.sendMessage(message) as Promise<RuntimeResponse<T>>;
}

function buildStatusGroups(state: AppState, query: string): Record<TabStatus, BatchGroup[]> {
  const groupsByStatus: Record<TabStatus, BatchGroup[]> = {
    inbox: [],
    doing: [],
    later: [],
    done: []
  };

  for (const status of STATUS_ORDER) {
    const tabsInStatus = Object.values(state.tabs)
      .filter((tab) => tab.status === status)
      .filter((tab) => matchesQuery(tab, query));

    const grouped = new Map<string, TabItem[]>();
    for (const tab of tabsInStatus) {
      if (!grouped.has(tab.batchId)) {
        grouped.set(tab.batchId, []);
      }
      grouped.get(tab.batchId)?.push(tab);
    }

    const statusGroups = Array.from(grouped.entries()).map(([batchId, tabs]) => ({
      batchId,
      batchCreatedAt: state.batches[batchId]?.createdAt ?? 0,
      tabs: tabs.sort(sortTabsByOriginalIndex)
    }));

    statusGroups.sort((a, b) => {
      const leftBatch = state.batches[a.batchId];
      const rightBatch = state.batches[b.batchId];

      if (leftBatch && rightBatch) {
        return sortBatchesByCreatedAtDesc(leftBatch, rightBatch);
      }
      return b.batchCreatedAt - a.batchCreatedAt;
    });

    groupsByStatus[status] = statusGroups;
  }

  return groupsByStatus;
}

export default function App(): JSX.Element {
  const [state, setState] = useState<AppState>({ version: 1, tabs: {}, batches: {} });
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [capturePending, setCapturePending] = useState(false);
  const [confirmState, setConfirmState] = useState<ConfirmState>(null);
  const [notice, setNotice] = useState('');
  const [collapsed, setCollapsed] = useState<Record<TabStatus, boolean>>({
    inbox: false,
    doing: true,
    later: true,
    done: true
  });

  useEffect(() => {
    let active = true;

    const bootstrap = async () => {
      const next = await loadState();
      if (!active) {
        return;
      }
      setState(next);
      setLoading(false);
    };

    const handleStorageChange = (
      changes: Record<string, chrome.storage.StorageChange>,
      areaName: string
    ) => {
      if (areaName !== 'local' || !changes[STORAGE_KEY]) {
        return;
      }
      const nextState = normalizeState(changes[STORAGE_KEY].newValue);
      setState(nextState);
    };

    void bootstrap();
    chrome.storage.onChanged.addListener(handleStorageChange);

    return () => {
      active = false;
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

  const groupsByStatus = useMemo(() => buildStatusGroups(state, searchQuery), [state, searchQuery]);

  const counts = useMemo(() => {
    const result: Record<TabStatus, number> = {
      inbox: 0,
      doing: 0,
      later: 0,
      done: 0
    };

    for (const tab of Object.values(state.tabs)) {
      result[tab.status] += 1;
    }
    return result;
  }, [state]);

  const doneCount = counts.done;

  const setNoticeMessage = (message: string) => {
    setNotice(message);
    window.setTimeout(() => {
      setNotice('');
    }, 2200);
  };

  const handleCapture = async () => {
    setCapturePending(true);
    const response = await sendRuntimeMessage<{ capturedCount: number }>({
      type: MESSAGE_TYPES.CAPTURE_CURRENT_WINDOW
    });
    setCapturePending(false);

    if (!response.ok) {
      setNoticeMessage(response.message ?? '收纳失败');
      return;
    }

    setNoticeMessage(`已收纳 ${response.data?.capturedCount ?? 0} 个标签页`);
  };

  const handleRestoreTab = async (tabId: string) => {
    const response = await sendRuntimeMessage({
      type: MESSAGE_TYPES.RESTORE_TAB,
      tabId
    });
    if (!response.ok) {
      setNoticeMessage(response.message ?? '恢复失败');
    }
  };

  const handleRestoreBatch = async (batchId: string) => {
    const response = await sendRuntimeMessage<{ restoredCount: number }>({
      type: MESSAGE_TYPES.RESTORE_BATCH,
      batchId
    });
    if (!response.ok) {
      setNoticeMessage(response.message ?? '批次恢复失败');
      return;
    }
    setNoticeMessage(`已恢复 ${response.data?.restoredCount ?? 0} 个标签页`);
  };

  const handleChangeStatus = async (tabId: string, status: TabStatus) => {
    const response = await sendRuntimeMessage({
      type: MESSAGE_TYPES.UPDATE_TAB_STATUS,
      tabId,
      status
    });
    if (!response.ok) {
      setNoticeMessage(response.message ?? '状态更新失败');
    }
  };

  const handleConfirmDelete = async () => {
    if (!confirmState) {
      return;
    }

    if (confirmState.type === 'tab') {
      const response = await sendRuntimeMessage({
        type: MESSAGE_TYPES.DELETE_TAB,
        tabId: confirmState.tabId
      });
      if (!response.ok) {
        setNoticeMessage(response.message ?? '删除失败');
      }
    } else {
      const response = await sendRuntimeMessage({
        type: MESSAGE_TYPES.DELETE_BATCH,
        batchId: confirmState.batchId
      });
      if (!response.ok) {
        setNoticeMessage(response.message ?? '删除失败');
      }
    }

    setConfirmState(null);
  };

  if (loading) {
    return <main className="page loading">加载中...</main>;
  }

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <h1>TabDebt Manager</h1>
          <p>标签页不是网页，而是待处理事项。</p>
        </div>
        <button className="button button-primary" onClick={handleCapture} disabled={capturePending}>
          {capturePending ? '收纳中...' : '一键收纳当前窗口'}
        </button>
      </header>

      <div className="toolbar">
        <input
          className="search-input"
          placeholder="搜索标题 / URL / 域名"
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
      </div>

      {notice && <p className="notice">{notice}</p>}

      {doneCount > 30 && (
        <p className="cleanup-hint">Done 已超过 30 条，建议清理历史已处理记录。</p>
      )}

      <section className="sections">
        {STATUS_ORDER.map((status) => (
          <StatusSection
            key={status}
            status={status}
            title={STATUS_LABEL[status]}
            collapsed={collapsed[status]}
            tabCount={counts[status]}
            groups={groupsByStatus[status]}
            onToggle={() => {
              setCollapsed((prev) => ({
                ...prev,
                [status]: !prev[status]
              }));
            }}
            onRestoreBatch={handleRestoreBatch}
            onDeleteBatch={(batchId, count) => {
              setConfirmState({ type: 'batch', batchId, count });
            }}
            onRestoreTab={handleRestoreTab}
            onDeleteTab={(tab) => {
              setConfirmState({ type: 'tab', tabId: tab.id, label: tab.title || tab.url });
            }}
            onChangeStatus={handleChangeStatus}
          />
        ))}
      </section>

      <ConfirmDialog
        open={confirmState !== null}
        title={confirmState?.type === 'tab' ? '确认删除标签记录' : '确认删除整个批次'}
        description={
          confirmState?.type === 'tab'
            ? `删除后不可恢复：${confirmState.label}`
            : `将删除该批次下 ${confirmState?.count ?? 0} 条标签记录，且不可恢复。`
        }
        onCancel={() => {
          setConfirmState(null);
        }}
        onConfirm={handleConfirmDelete}
      />
    </main>
  );
}
