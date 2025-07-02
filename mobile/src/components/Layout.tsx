import React, { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header, { HeaderProps } from "./Header";

type LayoutProps = {
  footer?: React.ReactNode;
} & PropsWithChildren &
  HeaderProps;

const Layout: React.FC<LayoutProps> = ({
  footer,
  children,
  ...headerProps
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white">
      <Header {...headerProps} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
        {children}
      </ScrollView>
      {footer && (
        <View className="p-4" style={{ paddingBottom: bottom }}>
          {footer}
        </View>
      )}
    </View>
  );
};

export default Layout;
