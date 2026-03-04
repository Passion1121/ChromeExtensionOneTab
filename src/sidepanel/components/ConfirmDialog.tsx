type ConfirmDialogProps = {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = '确认删除',
  onConfirm,
  onCancel
}: ConfirmDialogProps): JSX.Element | null {
  if (!open) {
    return null;
  }

  return (
    <div className="dialog-backdrop" role="presentation" onClick={onCancel}>
      <div
        className="dialog-card"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="dialog-actions">
          <button className="button button-secondary" onClick={onCancel}>
            取消
          </button>
          <button className="button button-danger" onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
