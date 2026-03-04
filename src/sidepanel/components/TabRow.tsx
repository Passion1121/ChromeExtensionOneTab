import { TAB_STATUSES, type TabItem, type TabStatus } from '../../shared/types';

const STATUS_LABEL: Record<TabStatus, string> = {
  inbox: 'Inbox',
  doing: 'Doing',
  later: 'Later',
  done: 'Done'
};

type TabRowProps = {
  tab: TabItem;
  onRestoreTab: (tabId: string) => void;
  onDeleteTab: (tab: TabItem) => void;
  onChangeStatus: (tabId: string, status: TabStatus) => void;
};

export function TabRow({ tab, onRestoreTab, onDeleteTab, onChangeStatus }: TabRowProps): JSX.Element {
  return (
    <article className="tab-row">
      <div className="tab-row-content">
        <a className="tab-title" href={tab.url} target="_blank" rel="noreferrer" title={tab.title}>
          {tab.title || tab.url}
        </a>
        <p className="tab-url" title={tab.url}>
          {tab.domain || 'Unknown domain'} · {tab.url}
        </p>
      </div>
      <div className="tab-row-controls">
        <select
          className="status-select"
          value={tab.status}
          onChange={(event) => {
            onChangeStatus(tab.id, event.target.value as TabStatus);
          }}
          aria-label="Tab status"
        >
          {TAB_STATUSES.map((status) => (
            <option key={status} value={status}>
              {STATUS_LABEL[status]}
            </option>
          ))}
        </select>
        <button
          className="button button-secondary"
          onClick={() => {
            onRestoreTab(tab.id);
          }}
        >
          恢复
        </button>
        <button
          className="button button-danger-ghost"
          onClick={() => {
            onDeleteTab(tab);
          }}
        >
          删除
        </button>
      </div>
    </article>
  );
}
