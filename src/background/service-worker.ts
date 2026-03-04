import {
  MESSAGE_TYPES,
  type RuntimeMessage
} from '../shared/messages';
import { loadState, mutateState } from '../shared/storage';
import { TAB_STATUSES, type RuntimeResponse, type TabItem, type TabStatus } from '../shared/types';
import { extractDomain, isCapturableUrl, sortTabsByOriginalIndex } from '../shared/utils';

type CapturableTab = {
  chromeTabId: number;
  title: string;
  url: string;
  originalIndex: number;
};

function ok<T>(data: T): RuntimeResponse<T> {
  return { ok: true, data };
}

function fail(message: string, errorCode: string): RuntimeResponse {
  return {
    ok: false,
    message,
    errorCode
  };
}

function isTabStatus(value: string): value is TabStatus {
  return TAB_STATUSES.includes(value as TabStatus);
}

function toCapturableTab(tab: chrome.tabs.Tab): CapturableTab | null {
  if (tab.id === undefined || tab.pinned) {
    return null;
  }
  if (!isCapturableUrl(tab.url)) {
    return null;
  }

  return {
    chromeTabId: tab.id,
    title: tab.title ?? tab.url,
    url: tab.url,
    originalIndex: tab.index
  };
}

function toTabItem(input: CapturableTab, batchId: string, createdAt: number): TabItem {
  return {
    id: crypto.randomUUID(),
    batchId,
    title: input.title,
    url: input.url,
    domain: extractDomain(input.url),
    createdAt,
    updatedAt: createdAt,
    originalIndex: input.originalIndex,
    status: 'inbox',
    restoredCount: 0
  };
}

async function captureCurrentWindow(): Promise<RuntimeResponse> {
  const currentWindow = await chrome.windows.getCurrent({ populate: true });
  const tabs = currentWindow.tabs ?? [];

  const capturableTabs = tabs
    .map(toCapturableTab)
    .filter((tab): tab is CapturableTab => tab !== null)
    .sort((a, b) => a.originalIndex - b.originalIndex);

  if (capturableTabs.length === 0) {
    return ok({ capturedCount: 0, batchId: null });
  }

  const createdAt = Date.now();
  const batchId = crypto.randomUUID();
  const tabItems = capturableTabs.map((tab) => toTabItem(tab, batchId, createdAt));
  const tabIds = tabItems.map((tab) => tab.id);

  await mutateState((state) => {
    state.batches[batchId] = {
      id: batchId,
      createdAt,
      sourceWindowId: currentWindow.id ?? -1,
      tabIds,
      deleted: false
    };

    for (const tab of tabItems) {
      state.tabs[tab.id] = tab;
    }

    return state;
  });

  const chromeTabIds = capturableTabs.map((tab) => tab.chromeTabId);
  if (chromeTabIds.length > 0) {
    await chrome.tabs.remove(chromeTabIds);
  }

  return ok({ capturedCount: tabItems.length, batchId });
}

async function openUrls(urls: string[], windowId?: number): Promise<void> {
  for (const url of urls) {
    const payload: chrome.tabs.CreateProperties = {
      url,
      active: false
    };
    if (windowId !== undefined) {
      payload.windowId = windowId;
    }
    await chrome.tabs.create(payload);
  }
}

async function restoreTab(tabId: string, windowId?: number): Promise<RuntimeResponse> {
  const state = await loadState();
  const tab = state.tabs[tabId];
  if (!tab) {
    return fail('Tab record not found.', 'TAB_NOT_FOUND');
  }

  await openUrls([tab.url], windowId);

  await mutateState((next) => {
    const current = next.tabs[tabId];
    if (current) {
      current.restoredCount += 1;
      current.updatedAt = Date.now();
    }
    return next;
  });

  return ok({ restoredCount: 1 });
}

async function restoreBatch(batchId: string, windowId?: number): Promise<RuntimeResponse> {
  const state = await loadState();
  const batch = state.batches[batchId];
  if (!batch) {
    return fail('Batch not found.', 'BATCH_NOT_FOUND');
  }

  const tabs = batch.tabIds
    .map((tabId) => state.tabs[tabId])
    .filter((tab): tab is TabItem => tab !== undefined)
    .sort(sortTabsByOriginalIndex);

  if (tabs.length === 0) {
    return ok({ restoredCount: 0 });
  }

  await openUrls(
    tabs.map((tab) => tab.url),
    windowId
  );

  const now = Date.now();
  await mutateState((next) => {
    for (const tab of tabs) {
      const target = next.tabs[tab.id];
      if (!target) {
        continue;
      }
      target.restoredCount += 1;
      target.updatedAt = now;
    }
    return next;
  });

  return ok({ restoredCount: tabs.length });
}

async function deleteTab(tabId: string): Promise<RuntimeResponse> {
  const state = await loadState();
  const tab = state.tabs[tabId];
  if (!tab) {
    return fail('Tab record not found.', 'TAB_NOT_FOUND');
  }

  await mutateState((next) => {
    delete next.tabs[tabId];

    const batch = next.batches[tab.batchId];
    if (batch) {
      batch.tabIds = batch.tabIds.filter((id) => id !== tabId);
      if (batch.tabIds.length === 0) {
        delete next.batches[tab.batchId];
      }
    }

    return next;
  });

  return ok({ deletedTabId: tabId });
}

async function deleteBatch(batchId: string): Promise<RuntimeResponse> {
  const state = await loadState();
  const batch = state.batches[batchId];
  if (!batch) {
    return fail('Batch not found.', 'BATCH_NOT_FOUND');
  }

  await mutateState((next) => {
    const currentBatch = next.batches[batchId];
    if (!currentBatch) {
      return next;
    }

    for (const tabId of currentBatch.tabIds) {
      delete next.tabs[tabId];
    }

    delete next.batches[batchId];
    return next;
  });

  return ok({ deletedBatchId: batchId });
}

async function updateTabStatus(tabId: string, status: string): Promise<RuntimeResponse> {
  if (!isTabStatus(status)) {
    return fail('Invalid tab status.', 'INVALID_STATUS');
  }

  const state = await loadState();
  if (!state.tabs[tabId]) {
    return fail('Tab record not found.', 'TAB_NOT_FOUND');
  }

  const now = Date.now();
  await mutateState((next) => {
    const tab = next.tabs[tabId];
    if (!tab) {
      return next;
    }

    tab.status = status;
    tab.updatedAt = now;
    return next;
  });

  return ok({ tabId, status });
}

async function handleMessage(message: RuntimeMessage, sender: chrome.runtime.MessageSender): Promise<RuntimeResponse> {
  switch (message.type) {
    case MESSAGE_TYPES.CAPTURE_CURRENT_WINDOW:
      return captureCurrentWindow();
    case MESSAGE_TYPES.RESTORE_TAB:
      return restoreTab(message.tabId, sender.tab?.windowId);
    case MESSAGE_TYPES.RESTORE_BATCH:
      return restoreBatch(message.batchId, sender.tab?.windowId);
    case MESSAGE_TYPES.DELETE_TAB:
      return deleteTab(message.tabId);
    case MESSAGE_TYPES.DELETE_BATCH:
      return deleteBatch(message.batchId);
    case MESSAGE_TYPES.UPDATE_TAB_STATUS:
      return updateTabStatus(message.tabId, message.status);
    default:
      return fail('Unsupported message type.', 'UNSUPPORTED_MESSAGE');
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const runtimeMessage = message as RuntimeMessage;

  void handleMessage(runtimeMessage, sender)
    .then((response) => {
      sendResponse(response);
    })
    .catch((error: unknown) => {
      const message = error instanceof Error ? error.message : 'Unexpected runtime error.';
      sendResponse(fail(message, 'INTERNAL_ERROR'));
    });

  return true;
});

async function setupSidePanelBehavior(): Promise<void> {
  if (!chrome.sidePanel?.setPanelBehavior) {
    return;
  }

  await chrome.sidePanel.setPanelBehavior({
    openPanelOnActionClick: true
  });
}

chrome.runtime.onInstalled.addListener(() => {
  void setupSidePanelBehavior();
});

chrome.runtime.onStartup.addListener(() => {
  void setupSidePanelBehavior();
});
