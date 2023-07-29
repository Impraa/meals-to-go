import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Settings from "../../features/settings/screens/Settings";
import { FavouritesScreen } from "../../features/settings/screens/FavouritesScreen";
import { CameraScreen } from "../../features/settings/screens/CameraScreen";

const SettingStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <SettingStack.Screen name="Setting" component={Settings} />
      <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingStack.Screen name="Camera" component={CameraScreen} />
    </SettingStack.Navigator>
  );
};
