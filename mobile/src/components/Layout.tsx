import React, { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
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

  const paddingBottom = Math.max(bottom, 16);

  return (
    <View className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header {...headerProps} />
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom }}
        >
          {children}
        </ScrollView>
        {footer && (
          <View className="px-4 py-4 bg-white" style={{ paddingBottom }}>
            {footer}
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Layout;
