export const TAB_STATUSES = ['inbox', 'doing', 'later', 'done'] as const;

export type TabStatus = (typeof TAB_STATUSES)[number];

export interface TabItem {
  id: string;
  batchId: string;
  title: string;
  url: string;
  domain: string;
  createdAt: number;
  updatedAt: number;
  originalIndex: number;
  status: TabStatus;
  restoredCount: number;
}

export interface BatchItem {
  id: string;
  createdAt: number;
  sourceWindowId: number;
  tabIds: string[];
  deleted: boolean;
}

export interface AppState {
  version: 1;
  tabs: Record<string, TabItem>;
  batches: Record<string, BatchItem>;
}

export interface RuntimeResponse<T = unknown> {
  ok: boolean;
  data?: T;
  errorCode?: string;
  message?: string;
}
