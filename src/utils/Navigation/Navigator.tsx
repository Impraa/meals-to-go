import React from "react";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../../features/settings/screens/Settings";
import Maps from "../../features/maps/screens/Maps";

import { Ionicons } from "@expo/vector-icons";
import RestaurantNavigator from "./RestaurantNavigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "fast-food",
  Settings: "settings",
  Maps: "map",
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
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
