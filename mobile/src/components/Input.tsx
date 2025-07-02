import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { tv } from "tailwind-variants";

import colors from "tailwindcss/colors";

type InputProps = {
  label: string;
  error?: string;
} & TextInputProps;

const styles = tv({
  slots: {
    labelStyle: "font-roboto-regular text-md text-gray-500",
    input: "p-2 rounded-md h-12 border-[1px] border-gray-200 text-gray-700",
  },
  variants: {
    isFocused: {
      true: {
        input: "border-gray-700",
      },
    },
    isError: {
      true: {
        input: "border-red-500",
      },
    },
  },
});

const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const { labelStyle, input } = styles({ isFocused, isError: !!error });

  return (
    <View className="gap-2">
      <Text className={labelStyle()}>{label}</Text>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={input()}
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
    </View>
  );
};

export default Input;
