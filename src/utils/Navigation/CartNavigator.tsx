import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { CartScreen } from "../../features/cart/screens/CartScreen";
import { SuccessScreen } from "../../features/cart/screens/SuccessScreen";

const Stack = createStackNavigator();

export const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Main" component={CartScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
};
