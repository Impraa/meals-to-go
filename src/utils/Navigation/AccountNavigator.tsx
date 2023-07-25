import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { AccountScreen } from "../../features/user/screens/AccountScreen";
import { LoginScreen } from "../../features/user/screens/LoginScreen.tsx";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
