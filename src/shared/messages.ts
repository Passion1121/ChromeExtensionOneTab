import type { TabStatus } from './types';

export const MESSAGE_TYPES = {
  CAPTURE_CURRENT_WINDOW: 'CAPTURE_CURRENT_WINDOW',
  RESTORE_TAB: 'RESTORE_TAB',
  RESTORE_BATCH: 'RESTORE_BATCH',
  DELETE_TAB: 'DELETE_TAB',
  DELETE_BATCH: 'DELETE_BATCH',
  UPDATE_TAB_STATUS: 'UPDATE_TAB_STATUS'
} as const;

export type MessageType = (typeof MESSAGE_TYPES)[keyof typeof MESSAGE_TYPES];

export type CaptureCurrentWindowMessage = {
  type: typeof MESSAGE_TYPES.CAPTURE_CURRENT_WINDOW;
};

export type RestoreTabMessage = {
  type: typeof MESSAGE_TYPES.RESTORE_TAB;
  tabId: string;
};

export type RestoreBatchMessage = {
  type: typeof MESSAGE_TYPES.RESTORE_BATCH;
  batchId: string;
};

export type DeleteTabMessage = {
  type: typeof MESSAGE_TYPES.DELETE_TAB;
  tabId: string;
};

export type DeleteBatchMessage = {
  type: typeof MESSAGE_TYPES.DELETE_BATCH;
  batchId: string;
};

export type UpdateTabStatusMessage = {
  type: typeof MESSAGE_TYPES.UPDATE_TAB_STATUS;
  tabId: string;
  status: TabStatus;
};

export type RuntimeMessage =
  | CaptureCurrentWindowMessage
  | RestoreTabMessage
  | RestoreBatchMessage
  | DeleteTabMessage
  | DeleteBatchMessage
  | UpdateTabStatusMessage;

export function isRuntimeMessage(value: unknown): value is RuntimeMessage {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const candidate = value as { type?: string };
  return Boolean(candidate.type && Object.values(MESSAGE_TYPES).includes(candidate.type as MessageType));
}
