import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantScreen } from "../../features/restaurants/screens/restaurant";

const RestaurantStack = createStackNavigator();

const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
