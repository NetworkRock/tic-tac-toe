import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MenuScreen from "./pages/Menu/Menu";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "./pages/GameScreen";

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#121112",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
