import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FavouritesContext } from "../../../../context/FavouritesContext";
import RestaurantInfo from "../../restaurants/components/RestaurantCard";

export const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <View style={{ padding: 15 }}>
        {favourites ? (
          favourites.map((restaurant) => {
            return (
              <RestaurantInfo key={restaurant._id} restaurant={restaurant} />
            );
          })
        ) : (
          <Text>There are no favourite restaurants</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
