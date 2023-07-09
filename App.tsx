import { StatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant";

import {
  useFonts as useOswlad,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

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
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
}
