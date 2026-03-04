import { useEffect, useMemo, useRef, useState } from 'react';

type BrowserTab = {
  id?: number;
  title?: string;
  favIconUrl?: string;
  iconUrl?: string;
  url?: string;
  active?: boolean;
  index?: number;
  windowId?: number;
};

type DomainGroup = {
  domain: string;
  tabs: BrowserTab[];
  iconUrl?: string;
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

const COLLAPSE_THRESHOLD = 10;
const GOOGLE_FAVICON_URL = 'https://www.google.com/favicon.ico';

function isNewTabUrl(url?: string): boolean {
  if (!url) {
    return true;
  }
  return (
    url === 'about:blank' ||
    url.startsWith('chrome://newtab') ||
    url.startsWith('edge://newtab') ||
    url.includes('newtab')
  );
}

function getTabIconUrl(tab: Pick<BrowserTab, 'favIconUrl' | 'url'>): string | undefined {
  if (tab.favIconUrl) {
    return tab.favIconUrl;
  }
  if (isNewTabUrl(tab.url)) {
    return GOOGLE_FAVICON_URL;
  }
  return undefined;
}

export default function App(): JSX.Element {
  const [tabs, setTabs] = useState<BrowserTab[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedDomains, setExpandedDomains] = useState<Record<string, boolean>>({});
  const [pendingDeleteDomain, setPendingDeleteDomain] = useState<string | null>(null);
  const [domainOrder, setDomainOrder] = useState<string[]>([]);
  const [armedDragDomain, setArmedDragDomain] = useState<string | null>(null);
  const [draggingDomain, setDraggingDomain] = useState<string | null>(null);
  const [dragOverDomain, setDragOverDomain] = useState<string | null>(null);
  const pressTimerRef = useRef<number | null>(null);
  const brandIconUrl = chrome.runtime.getURL('icons/icon-32.png');

  const loadTabs = async () => {
    setLoading(true);
    const currentTabs = await chrome.tabs.query({ currentWindow: true });
    setTabs(
      currentTabs.map((tab) => ({
        id: tab.id,
        title: tab.title,
        favIconUrl: tab.favIconUrl,
        iconUrl: getTabIconUrl({ favIconUrl: tab.favIconUrl, url: tab.url }),
        url: tab.url,
        active: tab.active,
        index: tab.index,
        windowId: tab.windowId
      }))
    );
    setLoading(false);
  };

  useEffect(() => {
    void loadTabs();
  }, []);

  const keepPopupStableBeforeDelete = async (targetIds: number[]): Promise<void> => {
    if (targetIds.length === 0) {
      return;
    }

    const targetSet = new Set(targetIds);
    const activeTarget = tabs.find((tab) => tab.active && tab.id !== undefined && targetSet.has(tab.id));
    if (!activeTarget) {
      return;
    }

    const fallback = tabs.find((tab) => tab.id !== undefined && !targetSet.has(tab.id));
    if (fallback?.id !== undefined) {
      await chrome.tabs.update(fallback.id, { active: true });
      return;
    }

    const created = await chrome.tabs.create({
      active: true,
      url: 'about:blank'
    });

    if (created.id !== undefined) {
      await chrome.tabs.update(created.id, { active: true });
    }
  };

  const handleDelete = async (tabId?: number) => {
    if (tabId === undefined) {
      return;
    }
    await keepPopupStableBeforeDelete([tabId]);
    await chrome.tabs.remove(tabId);
    setTabs((prev) => prev.filter((tab) => tab.id !== tabId));
  };

  const handleActivateTab = async (tab: BrowserTab): Promise<void> => {
    if (tab.id === undefined) {
      return;
    }

    await chrome.tabs.update(tab.id, { active: true });
    if (tab.windowId !== undefined) {
      await chrome.windows.update(tab.windowId, { focused: true });
    }
  };

  const handleDeleteDomain = async (domain: string) => {
    const targetTabIds = tabs
      .filter((tab) => getDomain(tab.url) === domain)
      .map((tab) => tab.id)
      .filter((id): id is number => id !== undefined);

    if (targetTabIds.length === 0) {
      return;
    }

    await keepPopupStableBeforeDelete(targetTabIds);
    await chrome.tabs.remove(targetTabIds);
    setTabs((prev) => prev.filter((tab) => getDomain(tab.url) !== domain));
    setPendingDeleteDomain(null);
  };

  const shouldGroupByDomain = tabs.length > COLLAPSE_THRESHOLD;

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
        tabs: domainTabs,
        iconUrl: domainTabs.find((tab) => Boolean(tab.iconUrl))?.iconUrl
      }))
      .sort((left, right) => {
        if (right.tabs.length !== left.tabs.length) {
          return right.tabs.length - left.tabs.length;
        }
        return left.domain.localeCompare(right.domain);
      });
  }, [tabs]);

  const foldableGroups = useMemo(
    () => (shouldGroupByDomain ? domainGroups.filter((group) => group.tabs.length > 1) : []),
    [domainGroups, shouldGroupByDomain]
  );

  const orderedFoldableGroups = useMemo(() => {
    const groupMap = new Map(foldableGroups.map((group) => [group.domain, group]));
    const ordered = domainOrder.map((domain) => groupMap.get(domain)).filter((group): group is DomainGroup => Boolean(group));
    const missing = foldableGroups.filter((group) => !domainOrder.includes(group.domain));
    return [...ordered, ...missing];
  }, [domainOrder, foldableGroups]);

  const singleTabs = useMemo(
    () =>
      shouldGroupByDomain
        ? domainGroups.filter((group) => group.tabs.length === 1).map((group) => group.tabs[0])
        : tabs,
    [domainGroups, shouldGroupByDomain, tabs]
  );

  useEffect(() => {
    if (!shouldGroupByDomain) {
      setExpandedDomains({});
      return;
    }

    setExpandedDomains((prev) => {
      const next: Record<string, boolean> = {};
      for (const group of foldableGroups) {
        next[group.domain] = prev[group.domain] ?? false;
      }
      return next;
    });
  }, [foldableGroups, shouldGroupByDomain]);

  useEffect(() => {
    setDomainOrder((prev) => {
      const available = foldableGroups.map((group) => group.domain);
      const kept = prev.filter((domain) => available.includes(domain));
      const missing = available.filter((domain) => !kept.includes(domain));
      return [...kept, ...missing];
    });
  }, [foldableGroups]);

  useEffect(() => {
    if (!pendingDeleteDomain) {
      return;
    }
    const stillExists = foldableGroups.some((group) => group.domain === pendingDeleteDomain);
    if (!stillExists) {
      setPendingDeleteDomain(null);
    }
  }, [foldableGroups, pendingDeleteDomain]);

  useEffect(() => () => clearPressTimer(), []);

  const toggleDomain = (domain: string) => {
    setExpandedDomains((prev) => ({
      ...prev,
      [domain]: !prev[domain]
    }));
  };

  const clearPressTimer = () => {
    if (pressTimerRef.current !== null) {
      window.clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
  };

  const armDomainDrag = (domain: string) => {
    clearPressTimer();
    pressTimerRef.current = window.setTimeout(() => {
      setArmedDragDomain(domain);
    }, 220);
  };

  const disarmDomainDrag = () => {
    clearPressTimer();
    if (!draggingDomain) {
      setArmedDragDomain(null);
    }
  };

  const reorderDomains = (fromDomain: string, toDomain: string) => {
    if (fromDomain === toDomain) {
      return;
    }

    setDomainOrder((prev) => {
      const next = [...prev];
      const fromIndex = next.indexOf(fromDomain);
      const toIndex = next.indexOf(toDomain);
      if (fromIndex < 0 || toIndex < 0) {
        return prev;
      }
      next.splice(fromIndex, 1);
      next.splice(toIndex, 0, fromDomain);
      return next;
    });
  };

  const renderTabRow = (tab: BrowserTab, key: string) => (
    <li key={key} className="tab-item">
      <button className="tab-open-btn" onClick={() => void handleActivateTab(tab)}>
        <div className="tab-icon-wrap" aria-hidden="true">
          {tab.iconUrl ? (
            <img
              className="tab-icon"
              src={tab.iconUrl}
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
      </button>
      <button
        className="delete-btn"
        aria-label="删除标签页"
        onClick={(event) => {
          event.stopPropagation();
          void handleDelete(tab.id);
        }}
      >
        <svg viewBox="0 0 16 16" className="delete-icon" aria-hidden="true">
          <path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6" />
        </svg>
      </button>
    </li>
  );

  return (
    <main className="popup-root">
      <header className="popup-header">
        <h1 className="brand-title">
          <img src={brandIconUrl} className="brand-icon" alt="" />
          <span>AetherTabs</span>
        </h1>
        <button className="refresh-btn" onClick={() => void loadTabs()}>
          刷新
        </button>
      </header>

      {loading && <p className="state-text">加载中...</p>}

      {!loading && tabs.length === 0 && <p className="state-text">当前窗口没有标签页</p>}

      {!loading && tabs.length > 0 && (
        <>
          {shouldGroupByDomain && orderedFoldableGroups.length > 0 && (
            <ul className="domain-list">
              {orderedFoldableGroups.map((group) => {
                const isExpanded = expandedDomains[group.domain];
                return (
                  <li
                    key={group.domain}
                    className={`domain-group ${draggingDomain === group.domain ? 'is-dragging' : ''} ${
                      dragOverDomain === group.domain && draggingDomain !== group.domain ? 'is-drag-over' : ''
                    }`}
                    draggable={armedDragDomain === group.domain}
                    onDragStart={(event) => {
                      if (armedDragDomain !== group.domain) {
                        event.preventDefault();
                        return;
                      }
                      event.dataTransfer.effectAllowed = 'move';
                      event.dataTransfer.setData('text/plain', group.domain);
                      setDraggingDomain(group.domain);
                      setDragOverDomain(group.domain);
                    }}
                    onDragOver={(event) => {
                      event.preventDefault();
                      if (draggingDomain && draggingDomain !== group.domain) {
                        setDragOverDomain(group.domain);
                      }
                    }}
                    onDrop={(event) => {
                      event.preventDefault();
                      const sourceDomain = event.dataTransfer.getData('text/plain') || draggingDomain;
                      if (sourceDomain) {
                        reorderDomains(sourceDomain, group.domain);
                      }
                      setDragOverDomain(null);
                    }}
                    onDragEnd={() => {
                      setDraggingDomain(null);
                      setDragOverDomain(null);
                      setArmedDragDomain(null);
                      clearPressTimer();
                    }}
                  >
                    <div className="domain-header">
                      <button
                        className={`domain-drag-handle ${armedDragDomain === group.domain ? 'armed' : ''}`}
                        aria-label={`长按拖动 ${group.domain} 分组`}
                        title="长按可拖动分组"
                        onMouseDown={() => armDomainDrag(group.domain)}
                        onMouseUp={disarmDomainDrag}
                        onMouseLeave={disarmDomainDrag}
                        onTouchStart={() => armDomainDrag(group.domain)}
                        onTouchEnd={disarmDomainDrag}
                        onTouchCancel={disarmDomainDrag}
                      >
                        ⋮⋮
                      </button>
                      <button className="domain-toggle" onClick={() => toggleDomain(group.domain)}>
                        <span className={`domain-arrow ${isExpanded ? 'expanded' : ''}`}>▸</span>
                        <span className="domain-icon-wrap" aria-hidden="true">
                          {group.iconUrl ? (
                            <img
                              className="domain-icon"
                              src={group.iconUrl}
                              alt=""
                              referrerPolicy="no-referrer"
                              onError={(event) => {
                                (event.currentTarget as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <span className="domain-icon-fallback" />
                          )}
                        </span>
                        <span className="domain-name" title={group.domain}>
                          {group.domain}
                        </span>
                        <span className="domain-count">{group.tabs.length}</span>
                      </button>
                      <button
                        className="domain-delete-btn"
                        aria-label={`删除 ${group.domain} 下全部标签`}
                        onClick={() => {
                          setPendingDeleteDomain(group.domain);
                        }}
                      >
                        <svg viewBox="0 0 16 16" className="delete-icon" aria-hidden="true">
                          <path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6" />
                        </svg>
                      </button>
                    </div>
                    {pendingDeleteDomain === group.domain && (
                      <div className="domain-confirm-row">
                        <span className="domain-confirm-text">删除该分组全部标签？</span>
                        <button
                          className="confirm-btn"
                          onClick={() => {
                            void handleDeleteDomain(group.domain);
                          }}
                        >
                          确认
                        </button>
                        <button
                          className="cancel-btn"
                          onClick={() => {
                            setPendingDeleteDomain(null);
                          }}
                        >
                          取消
                        </button>
                      </div>
                    )}
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
          )}
          <ul
            className={`tab-list ${shouldGroupByDomain && orderedFoldableGroups.length > 0 ? 'standalone-in-group' : ''}`}
          >
            {singleTabs.map((tab, index) => renderTabRow(tab, `${tab.id ?? tab.title ?? 'tab'}-${index}`))}
          </ul>
        </>
      )}
    </main>
  );
}
