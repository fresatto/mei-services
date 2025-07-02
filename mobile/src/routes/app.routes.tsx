import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Services from "@screens/Services";
import HireService from "@screens/HireService/index";

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="HireService" component={HireService} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
