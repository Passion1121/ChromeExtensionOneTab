declare module 'react-window' {
  import * as React from 'react';

  export interface ListChildComponentProps<TData = unknown> {
    index: number;
    style: React.CSSProperties;
    data: TData;
    isScrolling?: boolean;
  }

  export interface VariableSizeListProps<TData = unknown> {
    children: (props: ListChildComponentProps<TData>) => React.ReactNode;
    className?: string;
    height: number;
    itemCount: number;
    itemData?: TData;
    itemSize: (index: number) => number;
    overscanCount?: number;
    width: number | string;
  }

  export class VariableSizeList<TData = unknown> extends React.Component<VariableSizeListProps<TData>> {}
}
