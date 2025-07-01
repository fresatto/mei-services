import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View className="bg-gray-900 p-6" style={{ paddingTop: top + 24 }}>
      <Text className="text-white font-baloo-bold text-center text-xl">
        {title}
      </Text>
    </View>
  );
};

export default Header;
