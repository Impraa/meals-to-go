import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  StatusBar as StatBar,
} from "react-native";
import { RestaurantType } from "../../../utils/Interfaces";
import RestaurantCard from "../components/RestaurantCard";
import { ListOfMeals } from "../components/ListOfMeals";

export const RestaurantDetail = ({ route }) => {
  const { item }: { item: RestaurantType } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantCard restaurant={item} />
      <ListOfMeals />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatBar.currentHeight : 0,
  },
});
