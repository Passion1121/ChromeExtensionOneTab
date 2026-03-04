const COLLAPSE_THRESHOLD = 10;
const LONG_PRESS_MS = 220;
const DELETE_ICON_SVG =
  '<svg viewBox="0 0 16 16" class="delete-icon" aria-hidden="true"><path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6"></path></svg>';

const manifestIcons = chrome.runtime.getManifest().icons ?? {};
const BRAND_ICON_URL = chrome.runtime.getURL(manifestIcons['32'] || 'icons/icon-32.png');
const FALLBACK_ICON_URL = chrome.runtime.getURL(manifestIcons['16'] || 'icons/icon-16.png');
const FAVICON_SERVICE_URL = chrome.runtime.getURL('/_favicon/');

const state = {
  tabs: [],
  loading: true,
  expandedDomains: {},
  pendingDeleteDomain: null,
  domainOrder: [],
  armedDragDomain: null,
  draggingDomain: null,
  dragOverDomain: null,
  pressTimerId: null,
};

const root = document.getElementById('root');

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

function getDomain(url) {
  if (!url) return 'unknown';
  try {
    return new URL(url).hostname || 'unknown';
  } catch {
    return 'unknown';
  }
}

function getTabIconUrl(tab) {
  const faviconUrl = new URL(FAVICON_SERVICE_URL);
  faviconUrl.searchParams.set('size', '32');

  if (
    !tab.url ||
    tab.url === 'about:blank' ||
    tab.url.startsWith('chrome://newtab') ||
    tab.url.startsWith('edge://newtab')
  ) {
    faviconUrl.searchParams.set('pageUrl', 'https://www.google.com');
    return faviconUrl.toString();
  }

  faviconUrl.searchParams.set('pageUrl', tab.url);
  return faviconUrl.toString();
}

const toViewTab = (tab) => ({
  id: tab.id,
  title: tab.title || 'Untitled',
  url: tab.url,
  domain: getDomain(tab.url),
  iconUrl: getTabIconUrl(tab),
  active: Boolean(tab.active),
  windowId: tab.windowId,
});

function clearPressTimer() {
  if (state.pressTimerId === null) return;
  window.clearTimeout(state.pressTimerId);
  state.pressTimerId = null;
}

function armDomainDrag(domain) {
  clearPressTimer();
  state.pressTimerId = window.setTimeout(() => {
    state.armedDragDomain = domain;
    render();
  }, LONG_PRESS_MS);
}

function disarmDomainDrag() {
  clearPressTimer();
  if (!state.draggingDomain && state.armedDragDomain !== null) {
    state.armedDragDomain = null;
    render();
  }
}

function reorderDomains(fromDomain, toDomain) {
  if (fromDomain === toDomain) return;
  const domains = [...state.domainOrder];
  const fromIndex = domains.indexOf(fromDomain);
  const toIndex = domains.indexOf(toDomain);
  if (fromIndex < 0 || toIndex < 0) return;
  domains.splice(fromIndex, 1);
  domains.splice(toIndex, 0, fromDomain);
  state.domainOrder = domains;
}

function getGroupDomainFromTarget(target) {
  if (!(target instanceof Element)) return '';
  return target.closest('.domain-group')?.dataset.domain || '';
}

async function keepPopupStableBeforeDelete(targetIds) {
  if (targetIds.length === 0) return;
  const targetSet = new Set(targetIds);

  const activeTarget = state.tabs.find((tab) => tab.active && tab.id !== undefined && targetSet.has(tab.id));
  if (!activeTarget) return;

  const fallback = state.tabs.find((tab) => tab.id !== undefined && !targetSet.has(tab.id));
  if (fallback?.id !== undefined) {
    await chrome.tabs.update(fallback.id, { active: true });
    return;
  }

  const created = await chrome.tabs.create({ active: true, url: 'about:blank' });
  if (created.id !== undefined) await chrome.tabs.update(created.id, { active: true });
}

async function loadTabs() {
  state.loading = true;
  render();
  const tabs = await chrome.tabs.query({ currentWindow: true });
  state.tabs = tabs.map(toViewTab);
  state.loading = false;
  render();
}

async function activateTabById(tabId) {
  if (tabId === undefined) return;
  const tab = state.tabs.find((item) => item.id === tabId);
  if (!tab) return;
  await chrome.tabs.update(tabId, { active: true });
  if (tab.windowId !== undefined) await chrome.windows.update(tab.windowId, { focused: true });
}

async function removeTabs(tabIds, keepPredicate) {
  if (tabIds.length === 0) return;
  await keepPopupStableBeforeDelete(tabIds);
  await chrome.tabs.remove(tabIds);
  state.tabs = state.tabs.filter(keepPredicate);
  render();
}

async function deleteSingleTab(tabId) {
  if (tabId === undefined) return;
  await removeTabs([tabId], (tab) => tab.id !== tabId);
}

async function deleteDomainGroup(domain) {
  const tabIds = state.tabs.filter((tab) => tab.domain === domain).map((tab) => tab.id).filter(Number.isFinite);
  if (tabIds.length === 0) return;
  await removeTabs(tabIds, (tab) => tab.domain !== domain);
  state.pendingDeleteDomain = null;
  render();
}

function computeDomainGroups() {
  const grouped = new Map();
  for (const tab of state.tabs) {
    if (!grouped.has(tab.domain)) grouped.set(tab.domain, []);
    grouped.get(tab.domain).push(tab);
  }
  return Array.from(grouped.entries())
    .map(([domain, tabs]) => ({
      domain,
      tabs,
      iconUrl: tabs.find((tab) => tab.iconUrl)?.iconUrl || FALLBACK_ICON_URL,
    }))
    .sort((a, b) => b.tabs.length - a.tabs.length || a.domain.localeCompare(b.domain));
}

function syncGroupState(groups) {
  const domains = groups.map((group) => group.domain);
  const domainSet = new Set(domains);

  state.expandedDomains = Object.fromEntries(
    domains.map((domain) => [domain, state.expandedDomains[domain] ?? false])
  );

  const keptOrder = state.domainOrder.filter((domain) => domainSet.has(domain));
  state.domainOrder = [...keptOrder, ...domains.filter((domain) => !keptOrder.includes(domain))];

  if (state.pendingDeleteDomain && !domainSet.has(state.pendingDeleteDomain)) {
    state.pendingDeleteDomain = null;
  }
}

function getViewModel() {
  const shouldGroupByDomain = state.tabs.length > COLLAPSE_THRESHOLD;
  const allGroups = computeDomainGroups();
  const foldableGroups = shouldGroupByDomain ? allGroups.filter((group) => group.tabs.length > 1) : [];
  syncGroupState(foldableGroups);

  const foldableMap = new Map(foldableGroups.map((group) => [group.domain, group]));
  const orderedFoldableGroups = [
    ...state.domainOrder.map((domain) => foldableMap.get(domain)).filter(Boolean),
    ...foldableGroups.filter((group) => !state.domainOrder.includes(group.domain)),
  ];

  const singleTabs = shouldGroupByDomain
    ? allGroups.filter((group) => group.tabs.length === 1).map((group) => group.tabs[0])
    : state.tabs;

  return { shouldGroupByDomain, orderedFoldableGroups, singleTabs };
}

const iconHtml = (className, src) =>
  `<img class="${className}" src="${escapeHtml(src)}" alt="" referrerpolicy="no-referrer">`;

const deleteButtonHtml = (className, label, action, value) =>
  `<button type="button" class="${className}" aria-label="${escapeHtml(label)}" data-action="${action}" data-value="${escapeHtml(value)}">${DELETE_ICON_SVG}</button>`;

function tabItemHtml(tab) {
  const tabId = String(tab.id ?? '');
  const title = escapeHtml(tab.title);

  return `
    <li class="tab-item">
      <button type="button" class="tab-open-btn" data-action="open-tab" data-value="${tabId}">
        <div class="tab-icon-wrap" aria-hidden="true">${iconHtml('tab-icon', tab.iconUrl || FALLBACK_ICON_URL)}</div>
        <p class="tab-title" title="${title}">${title}</p>
      </button>
      ${deleteButtonHtml('delete-btn', '删除标签页', 'delete-tab', tabId)}
    </li>
  `;
}

function domainGroupHtml(group) {
  const rawDomain = group.domain;
  const domain = escapeHtml(rawDomain);
  const expanded = Boolean(state.expandedDomains[group.domain]);
  const isDragging = state.draggingDomain === group.domain;
  const isDragOver = state.dragOverDomain === group.domain && !isDragging;
  const armed = state.armedDragDomain === group.domain;
  const showConfirm = state.pendingDeleteDomain === group.domain;

  const classes = ['domain-group'];
  if (isDragging) classes.push('is-dragging');
  if (isDragOver) classes.push('is-drag-over');

  const confirmRow = showConfirm
    ? `
      <div class="domain-confirm-row">
        <span class="domain-confirm-text">删除该分组全部标签？</span>
        <button type="button" class="confirm-btn" data-action="confirm-delete-domain" data-value="${domain}">确认</button>
        <button type="button" class="cancel-btn" data-action="cancel-delete-domain">取消</button>
      </div>
    `
    : '';

  const groupTabs = expanded
    ? `<ul class="tab-list grouped">${group.tabs.map(tabItemHtml).join('')}</ul>`
    : '';

  return `
    <li class="${classes.join(' ')}" data-domain="${domain}" ${armed ? 'draggable="true"' : ''}>
      <div class="domain-header">
        <button type="button" class="domain-drag-handle ${armed ? 'armed' : ''}" aria-label="长按拖动 ${domain} 分组" title="长按可拖动分组">⋮⋮</button>
        <button type="button" class="domain-toggle" data-action="toggle-domain" data-value="${domain}">
          <span class="domain-arrow ${expanded ? 'expanded' : ''}">▸</span>
          <span class="domain-icon-wrap" aria-hidden="true">${iconHtml('domain-icon', group.iconUrl)}</span>
          <span class="domain-name" title="${domain}">${domain}</span>
          <span class="domain-count">${group.tabs.length}</span>
        </button>
        ${deleteButtonHtml('domain-delete-btn', `删除 ${rawDomain} 下全部标签`, 'request-delete-domain', rawDomain)}
      </div>
      ${confirmRow}
      ${groupTabs}
    </li>
  `;
}

function render() {
  if (!root) return;

  const { shouldGroupByDomain, orderedFoldableGroups, singleTabs } = getViewModel();
  const showGroups = shouldGroupByDomain && orderedFoldableGroups.length > 0;
  const standaloneClass = showGroups ? 'tab-list standalone-in-group' : 'tab-list';

  const bodyHtml = state.loading
    ? '<p class="state-text">加载中...</p>'
    : state.tabs.length === 0
      ? '<p class="state-text">当前窗口没有标签页</p>'
      : `
        ${showGroups ? `<ul class="domain-list">${orderedFoldableGroups.map(domainGroupHtml).join('')}</ul>` : ''}
        <ul class="${standaloneClass}">${singleTabs.map(tabItemHtml).join('')}</ul>
      `;

  root.innerHTML = `
    <main class="popup-root">
      <header class="popup-header">
        <h1 class="brand-title">${iconHtml('brand-icon', BRAND_ICON_URL)}<span>AetherTabs</span></h1>
        <button type="button" class="refresh-btn" data-action="refresh">刷新</button>
      </header>
      ${bodyHtml}
    </main>
  `;
}

root?.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const button = target.closest('button[data-action]');
  if (!button) return;

  const { action, value } = button.dataset;
  switch (action) {
    case 'refresh':
      void loadTabs();
      break;
    case 'open-tab': {
      const tabId = Number(value);
      if (!Number.isNaN(tabId)) void activateTabById(tabId);
      break;
    }
    case 'delete-tab': {
      event.stopPropagation();
      const tabId = Number(value);
      if (!Number.isNaN(tabId)) void deleteSingleTab(tabId);
      break;
    }
    case 'toggle-domain':
      if (value) {
        state.expandedDomains[value] = !state.expandedDomains[value];
        render();
      }
      break;
    case 'request-delete-domain':
      if (value) {
        state.pendingDeleteDomain = value;
        render();
      }
      break;
    case 'confirm-delete-domain':
      if (value) void deleteDomainGroup(value);
      break;
    case 'cancel-delete-domain':
      state.pendingDeleteDomain = null;
      render();
      break;
    default:
      break;
  }
});

function handleDragStart(event) {
  const domain = getGroupDomainFromTarget(event.target);
  if (!domain) return;
  if (state.armedDragDomain !== domain) {
    event.preventDefault();
    return;
  }

  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/plain', domain);
  state.draggingDomain = domain;
  state.dragOverDomain = domain;
  render();
}

function handleDragOver(event) {
  const domain = getGroupDomainFromTarget(event.target);
  if (!domain || !state.draggingDomain || state.draggingDomain === domain) return;
  event.preventDefault();
  if (state.dragOverDomain !== domain) {
    state.dragOverDomain = domain;
    render();
  }
}

function handleDrop(event) {
  const targetDomain = getGroupDomainFromTarget(event.target);
  if (!targetDomain) return;

  event.preventDefault();
  const sourceDomain = event.dataTransfer.getData('text/plain') || state.draggingDomain;
  if (sourceDomain) reorderDomains(sourceDomain, targetDomain);

  state.dragOverDomain = null;
  render();
}

function handleDragEnd() {
  state.draggingDomain = null;
  state.dragOverDomain = null;
  state.armedDragDomain = null;
  clearPressTimer();
  render();
}

function handlePressStart(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const handle = target.closest('.domain-drag-handle');
  if (!handle) return;

  const domain = getGroupDomainFromTarget(handle);
  if (domain) armDomainDrag(domain);
}

root?.addEventListener('mousedown', handlePressStart);
root?.addEventListener('touchstart', handlePressStart, { passive: true });
['mouseup', 'mouseleave', 'touchend', 'touchcancel'].forEach((name) => {
  root?.addEventListener(name, disarmDomainDrag);
});

root?.addEventListener('dragstart', handleDragStart);
root?.addEventListener('dragover', handleDragOver);
root?.addEventListener('drop', handleDrop);
root?.addEventListener('dragend', handleDragEnd);

root?.addEventListener(
  'error',
  (event) => {
    const target = event.target;
    if (target instanceof HTMLImageElement && target.src !== FALLBACK_ICON_URL) {
      target.src = FALLBACK_ICON_URL;
    }
  },
  true
);

window.addEventListener('beforeunload', clearPressTimer);
void loadTabs();
