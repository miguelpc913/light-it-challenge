import { createContext, useCallback, useContext, useState } from "react";
import Toast from "../components/ui/Toast";
import uid from "../utils/uid";

type ToastInput = React.ComponentProps<typeof Toast>;

type ToastContextValue = {
  dismiss: (toastId: string) => void;
  addToast: (toastInput: Omit<ToastInput, "id">) => void;
  clear: () => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastInput[]>([]);

  const clear = useCallback(() => {
    setToasts([]);
  }, []);

  const dismiss = (toastId: string) => {
    setToasts((prevState) => {
      const newToasts = prevState.filter(
        (toastInput) => toastInput.id !== toastId,
      );
      return newToasts;
    });
  };

  const addToast = (newToastInput: Omit<ToastInput, "id">) => {
    setToasts((prevState) => {
      return [...prevState, { ...newToastInput, id: uid() }];
    });
  };

  return (
    <ToastContext.Provider value={{ clear, addToast, dismiss }}>
      {children}

      <div
        className="hc-toast-viewport"
        role="region"
        aria-label="Notifications"
      >
        {toasts.map((toastInput) => (
          <Toast key={toastInput.id} {...toastInput} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
