import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tv, VariantProps } from "tailwind-variants";

const styles = tv({
  base: "absolute top-1 left-4 right-4 p-4 bg-green-800 rounded-md",
  variants: {
    type: {
      success: "bg-green-800",
      error: "bg-red-800",
    },
  },
});

export type ToastProps = {
  message: string;
} & VariantProps<typeof styles>;

const Toast: React.FC<ToastProps> = ({ message, type = "success" }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View className={styles({ type })} style={{ top }}>
      <Text className="text-white font-baloo-bold text-lg text-center">
        {message}
      </Text>
    </View>
  );
};

export default Toast;
