import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const styles = tv({
  base: "absolute top-4  right-4 p-4 bg-green-800 rounded-md",
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
  return (
    <div className={styles({ type })}>
      <span className="text-white font-baloo-2 text-lg text-center font-bold">
        {message}
      </span>
    </div>
  );
};

export default Toast;
