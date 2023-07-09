import React from "react";

import { Text, StyleSheet, View } from "react-native";
import { RestaurantType } from "../../../utils/Interfaces";
import { Card, Title } from "react-native-paper";
import { colors, fontSizes, fonts, space } from "../../../utils/Infrastructure";
import { SvgXml } from "react-native-svg";
import Star from "../../../utils/Star";

const RestaurantInfo: React.FC<{ restaurant: RestaurantType }> = ({
  restaurant,
}) => {
  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

  return (
    <Card elevation={5} style={styles.container}>
      <Card.Cover
        key={restaurant.name}
        source={{ uri: restaurant.photos[0] }}
        style={styles.cardCover}
      />
      <View style={styles.info}>
        <Title style={styles.name}>{restaurant.name}</Title>
        <View style={styles.rating}>
          {ratingArray.map((item, key) => {
            return <SvgXml key={key} xml={Star} width={20} height={20} />;
          })}
        </View>
        <Text style={styles.address}>{restaurant.address}</Text>
      </View>
    </Card>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  container: {
    margin: space[3],
    backgroundColor: colors.bg.primary,
  },
  cardCover: {
    margin: space[1],
    height: 150,
  },
  name: {
    color: colors.ui.primary,
    fontFamily: fonts.heading,
    fontSize: fontSizes.body,
  },
  address: {
    fontFamily: fonts.body,
    fontSize: fontSizes.body,
  },
  info: {
    padding: space[3],
  },
  rating: {
    flexDirection: "row",
    paddingVertical: space[1],
  },
});
