import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import colors from "tailwindcss/colors";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="h-[50px] bg-gray-900 rounded-md items-center justify-center"
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text className="text-white font-baloo-bold text-xl">{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
