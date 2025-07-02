import Toast, { ToastProps } from "@components/Toast";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type ToastContextType = {
  showToast: (toastProps: ToastProps) => void;
  hideToast: () => void;
};

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [toastProps, setToastProps] = useState<ToastProps | null>(null);

  const showToast = (props: ToastProps) => {
    setToastProps(props);
  };

  const hideToast = () => {
    setToastProps(null);
  };

  useEffect(() => {
    if (toastProps) {
      setTimeout(() => {
        setToastProps(null);
      }, 3000);
    }
  }, [toastProps]);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toastProps && <Toast {...toastProps} />}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};

export { ToastProvider, useToast };
