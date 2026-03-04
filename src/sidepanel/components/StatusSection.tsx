import { useCallback, useMemo } from 'react';
import { VariableSizeList as List, type ListChildComponentProps } from 'react-window';
import { formatTime } from '../../shared/utils';
import type { TabItem, TabStatus } from '../../shared/types';
import { TabRow } from './TabRow';

export type BatchGroup = {
  batchId: string;
  batchCreatedAt: number;
  tabs: TabItem[];
};

type StatusSectionProps = {
  status: TabStatus;
  title: string;
  collapsed: boolean;
  tabCount: number;
  groups: BatchGroup[];
  onToggle: () => void;
  onRestoreBatch: (batchId: string) => void;
  onDeleteBatch: (batchId: string, tabCount: number) => void;
  onRestoreTab: (tabId: string) => void;
  onDeleteTab: (tab: TabItem) => void;
  onChangeStatus: (tabId: string, status: TabStatus) => void;
};

export function StatusSection({
  status,
  title,
  collapsed,
  tabCount,
  groups,
  onToggle,
  onRestoreBatch,
  onDeleteBatch,
  onRestoreTab,
  onDeleteTab,
  onChangeStatus
}: StatusSectionProps): JSX.Element {
  const rows = useMemo(() => {
    const result: Array<
      | { type: 'batch'; group: BatchGroup }
      | { type: 'tab'; tab: TabItem }
    > = [];

    for (const group of groups) {
      result.push({ type: 'batch', group });
      for (const tab of group.tabs) {
        result.push({ type: 'tab', tab });
      }
    }

    return result;
  }, [groups]);

  const getRowHeight = useCallback(
    (index: number): number => (rows[index]?.type === 'batch' ? 68 : 84),
    [rows]
  );

  const totalHeight = useMemo(
    () => rows.reduce((sum, _, index) => sum + getRowHeight(index), 0),
    [rows, getRowHeight]
  );

  const listHeight = Math.min(560, Math.max(totalHeight, 84));

  const renderRow = useCallback(
    ({ index, style }: ListChildComponentProps) => {
      const row = rows[index];
      if (!row) {
        return null;
      }

      if (row.type === 'batch') {
        const group = row.group;
        return (
          <div style={style} className="virtual-row">
            <header className="batch-header">
              <div>
                <h4>Batch {group.batchId.slice(0, 8)}</h4>
                <p>
                  {formatTime(group.batchCreatedAt)} · {group.tabs.length} tabs
                </p>
              </div>
              <div className="batch-actions">
                <button
                  className="button button-secondary"
                  onClick={() => {
                    onRestoreBatch(group.batchId);
                  }}
                >
                  恢复批次
                </button>
                <button
                  className="button button-danger-ghost"
                  onClick={() => {
                    onDeleteBatch(group.batchId, group.tabs.length);
                  }}
                >
                  删除批次
                </button>
              </div>
            </header>
          </div>
        );
      }

      return (
        <div style={style} className="virtual-row">
          <TabRow
            tab={row.tab}
            onRestoreTab={onRestoreTab}
            onDeleteTab={onDeleteTab}
            onChangeStatus={onChangeStatus}
          />
        </div>
      );
    },
    [onChangeStatus, onDeleteBatch, onDeleteTab, onRestoreBatch, onRestoreTab, rows]
  );

  return (
    <section className="status-section" data-status={status}>
      <button className="status-header" onClick={onToggle}>
        <span>
          {title} <em>({tabCount})</em>
        </span>
        <span>{collapsed ? '展开' : '折叠'}</span>
      </button>

      {!collapsed && (
        <div className="status-body">
          {groups.length === 0 && <p className="empty-text">暂无记录</p>}
          {groups.length > 0 && (
            <List
              className="virtual-list"
              width="100%"
              height={listHeight}
              itemCount={rows.length}
              itemSize={getRowHeight}
            >
              {renderRow}
            </List>
          )}
        </div>
      )}
    </section>
  );
}
