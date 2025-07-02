import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CaretLeftIcon } from "phosphor-react-native";

export type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, showBackButton }) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View className="bg-gray-900 p-6 relative" style={{ paddingTop: top + 24 }}>
      {showBackButton && (
        <TouchableOpacity
          className="z-10 absolute left-4 bottom-5 w-10 h-10 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <CaretLeftIcon size={24} color="#fff" weight="bold" />
        </TouchableOpacity>
      )}
      <Text className="text-white font-baloo-bold text-center text-xl">
        {title}
      </Text>
    </View>
  );
};

export default Header;
