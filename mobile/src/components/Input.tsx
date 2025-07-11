import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from "react-native";
import { tv } from "tailwind-variants";
import colors from "tailwindcss/colors";

import { maskPhone } from "@utils/mask";

type InputProps = {
  label: string;
  error?: string;
  phone?: boolean;
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

const Input: React.FC<InputProps> = ({
  label,
  error,
  onFocus,
  onBlur,
  onChangeText,
  phone,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const { labelStyle, input } = styles({ isFocused, isError: !!error });

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);

    if (onBlur) {
      onBlur(e);
    }
  };

  const handleChangeText = (text: string) => {
    let formattedText = text;

    if (phone) {
      formattedText = maskPhone(text);
    }

    if (onChangeText) {
      onChangeText(formattedText);
    }
  };

  return (
    <View className="gap-2">
      <Text className={labelStyle()}>{label}</Text>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={input()}
        placeholderTextColor={colors.gray[400]}
        onChangeText={handleChangeText}
        {...rest}
      />
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
    </View>
  );
};

export default Input;
