import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_400Regular, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "../global.css";
import Services from "./screens/Services";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_400Regular,
    Baloo2_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaProvider>
      <Services />
    </SafeAreaProvider>
  );
}
