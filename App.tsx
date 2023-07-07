import { StatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
}
