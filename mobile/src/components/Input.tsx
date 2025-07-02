import React, { ComponentProps } from "react";
import { Text, TextInput, View } from "react-native";

import colors from "tailwindcss/colors";

type InputProps = {
  label: string;
} & ComponentProps<typeof TextInput>;

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <View className="gap-2">
      <Text className="font-roboto-regular text-md text-gray-500">{label}</Text>
      <TextInput
        className="p-2 rounded-md h-12 border-[1px] border-gray-200 text-gray-700"
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />
    </View>
  );
};

export default Input;
