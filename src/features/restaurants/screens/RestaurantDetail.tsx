import React, { useContext } from "react";
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
import { Button } from "react-native-paper";
import { CartContext } from "../../../../context/CartContext";

export const RestaurantDetail = ({ route, navigation }) => {
  const { item }: { item: RestaurantType } = route.params;

  const { cart, addCartItem } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantCard restaurant={item} />
      <ListOfMeals />
      <Button
        textColor="white"
        rippleColor={"white"}
        style={styles.button}
        onPress={() => {
          addCartItem(item);
          navigation.navigate("Cart");
        }}
      >
        Add special to cart for 13.99$
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatBar.currentHeight : 0,
  },
  button: {
    backgroundColor: "#696AC3",
    color: "white",
    marginBottom: 10,
    marginHorizontal: 50,
  },
});
