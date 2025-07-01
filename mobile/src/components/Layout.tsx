import React, { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header, { HeaderProps } from "./Header";

type LayoutProps = {
  title: string;
} & PropsWithChildren &
  HeaderProps;

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View className="flex-1">
      <Header title={title} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default Layout;
