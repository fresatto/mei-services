import "../global.css";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_400Regular, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Loading from "@components/Loading";
import AppRoutes from "./routes/app.routes";
import { ToastProvider } from "./hooks/useToast";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_400Regular,
    Baloo2_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <StatusBar style="light" />
          <AppRoutes />
        </ToastProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
