import React from "react";

import { Text, StyleSheet, Image } from "react-native";
import { RestaurantType } from "../../../utils/Interfaces";
import { Card } from "react-native-paper";
import { colors } from "../../../utils/Infrastructure";

const RestaurantInfo: React.FC<{ restaurant: RestaurantType }> = ({
  restaurant,
}) => {
  return (
    <Card elevation={5} style={styles.container}>
      <Card.Cover
        key={restaurant.name}
        source={{ uri: restaurant.photos[0] }}
        style={styles.cardCover}
      />
      <Text style={styles.name}>{restaurant.name}</Text>
    </Card>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: "white",
  },
  cardCover: {
    margin: 5,
    height: 150,
  },
  name: {
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 10,
    color: colors.ui.primary,
  },
});
