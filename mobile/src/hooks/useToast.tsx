import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ToastContextType = {
  showToast: (message: string) => void;
  hideToast: () => void;
};

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const { top } = useSafeAreaInsets();

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const hideToast = () => {
    setToastMessage(null);
  };

  useEffect(() => {
    if (toastMessage) {
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    }
  }, [toastMessage]);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}

      {toastMessage && (
        <View
          className="absolute top-1 left-4 right-4 p-4 bg-green-800 rounded-md"
          style={{ top }}
        >
          <Text className="text-white font-baloo-bold text-lg text-center">
            {toastMessage}
          </Text>
        </View>
      )}
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
