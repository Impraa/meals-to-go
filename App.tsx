import { StatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  useFonts as useOswlad,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import Settings from "./src/features/settings/screens/Settings";
import Maps from "./src/features/maps/screens/Maps";

import { Ionicons } from "@expo/vector-icons";
import { RestaurantProvider } from "./context/RestaurantContext";

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswlad({
    Oswald_400Regular,
  });

  const [latoLodaed] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLodaed) {
    return null;
  }

  return (
    <>
      <RestaurantProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: keyof typeof Ionicons.glyphMap;

                if (route.name === "Restaurant") {
                  iconName = focused ? "fast-food" : "fast-food-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "settings" : "settings-outline";
                } else if (route.name === "Maps") {
                  iconName = focused ? "map" : "map-outline";
                } else {
                  iconName = "warning";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              headerShown: false,
            })}
          >
            <Tab.Screen name="Restaurant" component={RestaurantScreen} />
            <Tab.Screen name="Maps" component={Maps} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </RestaurantProvider>
      <StatusBar style="auto" />
    </>
  );
}
