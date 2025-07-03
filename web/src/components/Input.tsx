"use client";

import React, { ComponentProps, useState } from "react";
import { tv } from "tailwind-variants";

type InputProps = {
  label: string;
  error?: string;
  currencyInput?: boolean;
} & ComponentProps<"input">;

const inputStyles = tv({
  slots: {
    labelStyle: "font-roboto text-sm text-gray-500",
    input:
      "p-2 rounded-md h-12 border-[1px] border-gray-200 focus:outline-0 text-gray-700 focus:border-gray-700",
  },
  variants: {
    isError: {
      true: {
        input: "border-red-500",
      },
    },
  },
});

const Input: React.FC<InputProps> = ({
  label,
  error,
  currencyInput,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState("");

  const { labelStyle, input } = inputStyles({
    isError: !!error,
  });

  const formatCurrency = (value: string): string => {
    const numericValue = value.replace(/\D/g, "");

    const number = Number(numericValue);

    if (isNaN(number)) return "";

    const valueInCents = number / 100;

    return valueInCents.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    if (currencyInput) {
      const formattedText = formatCurrency(text);

      setInputValue(formattedText);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className={labelStyle()}>{label}</label>
      <input
        className={input()}
        onChange={handleChangeText}
        value={inputValue}
        {...rest}
      />
      {error && (
        <span className="text-red-500 text-sm outline-gray-200 focus:outline-red-500">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
