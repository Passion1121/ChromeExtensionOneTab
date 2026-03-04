import { useEffect, useState } from 'react';

type BrowserTab = {
  id?: number;
  title?: string;
  url?: string;
  pinned?: boolean;
};

export default function App(): JSX.Element {
  const [tabs, setTabs] = useState<BrowserTab[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTabs = async () => {
    setLoading(true);
    const currentTabs = await chrome.tabs.query({ currentWindow: true });
    setTabs(currentTabs);
    setLoading(false);
  };

  useEffect(() => {
    void loadTabs();
  }, []);

  const handleDelete = async (tabId?: number) => {
    if (tabId === undefined) {
      return;
    }
    await chrome.tabs.remove(tabId);
    setTabs((prev) => prev.filter((tab) => tab.id !== tabId));
  };

  return (
    <main className="popup-root">
      <header className="popup-header">
        <h1>当前标签页</h1>
        <button className="refresh-btn" onClick={() => void loadTabs()}>
          刷新
        </button>
      </header>

      {loading && <p className="state-text">加载中...</p>}

      {!loading && tabs.length === 0 && <p className="state-text">当前窗口没有标签页</p>}

      {!loading && tabs.length > 0 && (
        <ul className="tab-list">
          {tabs.map((tab) => (
            <li key={tab.id ?? `${tab.title}-${tab.url}`} className="tab-item">
              <div className="tab-meta">
                <p className="tab-title" title={tab.title || tab.url || ''}>
                  {tab.title || tab.url || 'Untitled'}
                </p>
                <p className="tab-url" title={tab.url || ''}>
                  {tab.url || ''}
                  {tab.pinned ? ' · pinned' : ''}
                </p>
              </div>
              <button className="delete-btn" onClick={() => void handleDelete(tab.id)}>
                删除
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
