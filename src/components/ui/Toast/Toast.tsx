import { useEffect } from "react";
import { useToast } from "../../../provider/ToastProvider";
import { Portal } from "../Portal";
import "./Toast.css";
import { CiWarning } from "react-icons/ci";
import { CgCheck } from "react-icons/cg";

type Props = {
  id: string;
  title: string;
  description?: string;
  variant?: "success" | "error";
  durationMs?: number;
};

export default function Toast({
  id,
  title,
  description,
  durationMs = 4500,
  variant = "success",
}: Props) {
  const { dismiss } = useToast();
  useEffect(() => {
    const t = window.setTimeout(() => {
      dismiss(id);
    }, durationMs);

    return () => window.clearTimeout(t);
  }, [dismiss, id, durationMs]);
  return (
    <Portal>
      <div
        className={`toast toast--${variant}`}
        role="status"
        aria-live="polite"
      >
        <div className="toast__icon" aria-hidden="true">
          {variant === "success" ? <CgCheck /> : <CiWarning></CiWarning>}
        </div>
        <div className="toast__content">
          <div className="toast__title">{title}</div>
          {description ? (
            <div className="toast__description">{description}</div>
          ) : null}
        </div>

        <button
          className="toast__close"
          aria-label="Dismiss notification"
          onClick={() => {
            dismiss(id);
          }}
        >
          ×
        </button>

        <div
          className="toast__progress"
          style={{ animationDuration: `${durationMs}ms` }}
          aria-hidden="true"
        />
      </div>
    </Portal>
  );
}
