import React from "react";

import { Text, StyleSheet, View, Image } from "react-native";
import { RestaurantType } from "../../../utils/Interfaces";
import { Card, Title } from "react-native-paper";
import { colors, fontSizes, fonts, space } from "../../../utils/Infrastructure";
import { SvgXml } from "react-native-svg";
import Star from "../../../../assets/Star";
import Open from "../../../../assets/Open";
import { Favourite } from "../../../components/Favourite";
import { FadeInView } from "../../../components/animations/FadeAnimation";

const RestaurantInfo: React.FC<{ restaurant: RestaurantType }> = ({
  restaurant,
}) => {
  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

  return (
    <FadeInView duration={1000}>
      <Card elevation={5} style={styles.container}>
        <Favourite restaurant={restaurant} />
        <Card.Cover
          key={restaurant.name}
          source={{ uri: restaurant.photos[0] }}
          style={styles.cardCover}
        />
        <View style={styles.info}>
          <Title style={styles.name}>{restaurant.name}</Title>
          <View style={styles.ratingAndOpen}>
            <View style={styles.rating}>
              {ratingArray.map((item, key) => {
                return <SvgXml key={key} xml={Star} width={20} height={20} />;
              })}
            </View>
            <View style={styles.openAndIcon}>
              {restaurant.isOpenNow ? (
                <SvgXml xml={Open} width={20} height={20} />
              ) : (
                <Text style={styles.restaurantClosed}>CLOSED TEMPORARLIY</Text>
              )}
              <Image style={styles.icon} source={{ uri: restaurant.icon }} />
            </View>
          </View>
          <Text style={styles.address}>{restaurant.address}</Text>
        </View>
      </Card>
    </FadeInView>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
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
    justifyContent: "space-between",
    paddingVertical: space[1],
  },
  ratingAndOpen: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  restaurantClosed: {
    fontFamily: fonts.heading,
    color: colors.text.error,
  },
  openAndIcon: {
    flexDirection: "row",
  },
  icon: {
    height: 15,
    width: 15,
    padding: 10,
    marginHorizontal: 10,
  },
  noFoundTextContainer: {},
  noFoundText: {
    flex: 1,
    fontSize: fontSizes.body,
    alignContent: "center",
    justifyContent: "center",

    textAlign: "center",
  },
});
