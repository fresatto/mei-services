import React, { ComponentProps } from "react";
import Spinner from "./Spinner";

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
} & ComponentProps<"button">;

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isLoading,
  ...buttonProps
}) => {
  return (
    <button
      className={`h-[40px] bg-gray-900 rounded-md items-center justify-center text-white font-baloo-2 font-bold text-md px-4 py-2 hover:bg-gray-700 cursor-pointer ${className}`}
      disabled={isLoading}
      {...buttonProps}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
