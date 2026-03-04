import type { AppState } from './types';

export const STORAGE_KEY = 'tabDebtStateV1';

export function createDefaultState(): AppState {
  return {
    version: 1,
    tabs: {},
    batches: {}
  };
}

function cloneState(state: AppState): AppState {
  return {
    version: 1,
    tabs: { ...state.tabs },
    batches: Object.fromEntries(
      Object.entries(state.batches).map(([id, batch]) => [
        id,
        {
          ...batch,
          tabIds: [...batch.tabIds]
        }
      ])
    )
  };
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function normalizeState(raw: unknown): AppState {
  if (!isObject(raw)) {
    return createDefaultState();
  }

  const version = raw.version === 1 ? 1 : 1;
  const tabs = isObject(raw.tabs) ? (raw.tabs as AppState['tabs']) : {};
  const batches = isObject(raw.batches) ? (raw.batches as AppState['batches']) : {};

  return {
    version,
    tabs,
    batches
  };
}

export async function loadState(): Promise<AppState> {
  const data = await chrome.storage.local.get(STORAGE_KEY);
  return normalizeState(data[STORAGE_KEY]);
}

export async function saveState(state: AppState): Promise<void> {
  await chrome.storage.local.set({ [STORAGE_KEY]: state });
}

let mutationQueue: Promise<void> = Promise.resolve();

export async function mutateState(mutator: (state: AppState) => AppState): Promise<AppState> {
  let resolvedState = createDefaultState();

  mutationQueue = mutationQueue.then(async () => {
    const current = await loadState();
    const next = mutator(cloneState(current));
    await saveState(next);
    resolvedState = next;
  });

  await mutationQueue;
  return resolvedState;
}
