import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

const Button: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="h-[50px] bg-gray-900 rounded-md items-center justify-center"
      {...rest}
    >
      <Text className="text-white font-baloo-bold text-xl">{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
