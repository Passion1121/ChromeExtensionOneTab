import { useEffect, useMemo, useState } from 'react';

type BrowserTab = {
  id?: number;
  title?: string;
  favIconUrl?: string;
  url?: string;
};

type DomainGroup = {
  domain: string;
  tabs: BrowserTab[];
};

function getDomain(url?: string): string {
  if (!url) {
    return 'unknown';
  }
  try {
    return new URL(url).hostname || 'unknown';
  } catch {
    return 'unknown';
  }
}

export default function App(): JSX.Element {
  const [tabs, setTabs] = useState<BrowserTab[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedDomains, setExpandedDomains] = useState<Record<string, boolean>>({});

  const loadTabs = async () => {
    setLoading(true);
    const currentTabs = await chrome.tabs.query({ currentWindow: true });
    setTabs(
      currentTabs.map((tab) => ({
        id: tab.id,
        title: tab.title,
        favIconUrl: tab.favIconUrl,
        url: tab.url
      }))
    );
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

  const shouldGroupByDomain = tabs.length > 15;

  const domainGroups = useMemo<DomainGroup[]>(() => {
    const grouped = new Map<string, BrowserTab[]>();
    for (const tab of tabs) {
      const domain = getDomain(tab.url);
      if (!grouped.has(domain)) {
        grouped.set(domain, []);
      }
      grouped.get(domain)?.push(tab);
    }

    return Array.from(grouped.entries())
      .map(([domain, domainTabs]) => ({
        domain,
        tabs: domainTabs
      }))
      .sort((left, right) => {
        if (right.tabs.length !== left.tabs.length) {
          return right.tabs.length - left.tabs.length;
        }
        return left.domain.localeCompare(right.domain);
      });
  }, [tabs]);

  useEffect(() => {
    if (!shouldGroupByDomain) {
      setExpandedDomains({});
      return;
    }

    setExpandedDomains((prev) => {
      const next: Record<string, boolean> = {};
      for (const group of domainGroups) {
        next[group.domain] = prev[group.domain] ?? false;
      }
      return next;
    });
  }, [domainGroups, shouldGroupByDomain]);

  const toggleDomain = (domain: string) => {
    setExpandedDomains((prev) => ({
      ...prev,
      [domain]: !prev[domain]
    }));
  };

  const renderTabRow = (tab: BrowserTab, key: string) => (
    <li key={key} className="tab-item">
      <div className="tab-meta">
        <div className="tab-icon-wrap" aria-hidden="true">
          {tab.favIconUrl ? (
            <img
              className="tab-icon"
              src={tab.favIconUrl}
              alt=""
              referrerPolicy="no-referrer"
              onError={(event) => {
                (event.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <span className="tab-icon-fallback" />
          )}
        </div>
        <p className="tab-title" title={tab.title || ''}>
          {tab.title || 'Untitled'}
        </p>
      </div>
      <button className="delete-btn" aria-label="删除标签页" onClick={() => void handleDelete(tab.id)}>
        <svg viewBox="0 0 16 16" className="delete-icon" aria-hidden="true">
          <path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6" />
        </svg>
      </button>
    </li>
  );

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
        <>
          {shouldGroupByDomain ? (
            <ul className="domain-list">
              {domainGroups.map((group) => {
                const isExpanded = expandedDomains[group.domain];
                return (
                  <li key={group.domain} className="domain-group">
                    <button className="domain-toggle" onClick={() => toggleDomain(group.domain)}>
                      <span className={`domain-arrow ${isExpanded ? 'expanded' : ''}`}>▸</span>
                      <span className="domain-name" title={group.domain}>
                        {group.domain}
                      </span>
                      <span className="domain-count">{group.tabs.length}</span>
                    </button>
                    {isExpanded && (
                      <ul className="tab-list grouped">
                        {group.tabs.map((tab, index) =>
                          renderTabRow(tab, `${group.domain}-${tab.id ?? tab.title ?? 'tab'}-${index}`)
                        )}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className="tab-list">
              {tabs.map((tab, index) => renderTabRow(tab, `${tab.id ?? tab.title ?? 'tab'}-${index}`))}
            </ul>
          )}
        </>
      )}
    </main>
  );
}
