import React, { ComponentProps } from "react";

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
      className={`bg-gray-900 rounded-md items-center justify-center text-white font-baloo-2 font-bold text-md px-4 py-2 hover:bg-gray-700 cursor-pointer ${className}`}
      {...buttonProps}
    >
      {isLoading ? <span>Carregando...</span> : children}
    </button>
  );
};

export default Button;
