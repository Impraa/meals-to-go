import { StatusBar } from "expo-status-bar";

import React, { useEffect, useState } from "react";

import {
  useFonts as useOswlad,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantProvider } from "./context/RestaurantContext";
import Navigator from "./src/utils/Navigation/Navigator";
import { FavouritesProvider } from "./context/FavouritesContext";
import { UserContextProvider } from "./context/UserContext";

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
      <UserContextProvider>
        <FavouritesProvider>
          <RestaurantProvider>
            <Navigator />
          </RestaurantProvider>
        </FavouritesProvider>
      </UserContextProvider>
      <StatusBar style="dark" />
    </>
  );
}
