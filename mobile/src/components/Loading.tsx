import React from "react";
import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

const Loading: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color={colors.gray[700]} />
    </View>
  );
};

export default Loading;
