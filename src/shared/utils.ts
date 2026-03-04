import type { BatchItem, TabItem } from './types';

const INTERNAL_PREFIXES = ['chrome://', 'edge://', 'about:', 'chrome-extension://'];

export function isCapturableUrl(url: string | undefined): url is string {
  if (!url) {
    return false;
  }
  const trimmed = url.trim();
  if (!trimmed) {
    return false;
  }
  return !INTERNAL_PREFIXES.some((prefix) => trimmed.startsWith(prefix));
}

export function extractDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
}

export function matchesQuery(tab: TabItem, query: string): boolean {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return true;
  }

  return [tab.title, tab.url, tab.domain].some((field) => field.toLowerCase().includes(normalized));
}

export function sortTabsByOriginalIndex(a: TabItem, b: TabItem): number {
  return a.originalIndex - b.originalIndex;
}

export function sortBatchesByCreatedAtDesc(a: BatchItem, b: BatchItem): number {
  return b.createdAt - a.createdAt;
}

export function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleString();
}
