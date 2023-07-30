import React, { useContext } from "react";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../../features/settings/screens/Settings";
import Maps from "../../features/maps/screens/Maps";

import { View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import RestaurantNavigator from "./RestaurantNavigator";
import { UserContext } from "../../../context/UserContext";
import { AccountNavigator } from "./AccountNavigator";
import { FavouritesProvider } from "../../../context/FavouritesContext";
import { RestaurantProvider } from "../../../context/RestaurantContext";
import { SettingsNavigator } from "./SettingsNavigator";
import { CartNavigator } from "./CartNavigator";
import { CartProvider } from "../../../context/CartContext";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "fast-food",
  Settings: "settings",
  Maps: "map",
  Cart: "cart",
};

const createScreenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ focused, size, color }) => (
      <Ionicons
        name={!focused ? iconName + "-outline" : iconName}
        size={size}
        color={color}
      />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

function Navigator() {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user ? (
        <CartProvider>
          <FavouritesProvider>
            <RestaurantProvider>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
                <Tab.Screen name="Cart" component={CartNavigator} />
                <Tab.Screen name="Maps" component={Maps} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
            </RestaurantProvider>
          </FavouritesProvider>
        </CartProvider>
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
}

export default Navigator;
