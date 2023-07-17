import { StatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant";

import React from "react";

import {
  useFonts as useOswlad,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantProvider } from "./context/RestaurantContext";
import Navigator from "./src/utils/Navigation/Navigator";

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
        <Navigator />
      </RestaurantProvider>
      <StatusBar style="dark" />
    </>
  );
}
