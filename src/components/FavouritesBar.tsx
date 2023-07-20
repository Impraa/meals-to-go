import React, { useContext } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { FavouritesContext } from "../../context/FavouritesContext";
import { styled } from "styled-components/native";
import { ScrollView } from "react-native";
import { MapCallout } from "../features/maps/components/MapCallout";
import WebView from "react-native-webview";
import { fonts, fontSizes } from "../utils/Infrastructure";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 75px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const FavouritesBar: React.FC<{
  navigation: NavigationProp<ParamListBase>;
}> = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites!.map((item) => {
          const key = item._id;
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                navigation.navigate("RestaurantDetail", { item });
              }}
            >
              <Item>
                <CompactImage source={{ uri: item.photos[0] }} />
                <Text
                  style={{
                    paddingVertical: 10,
                    fontFamily: fonts.heading,
                    fontSize: fontSizes.caption,
                  }}
                >
                  {item.name}
                </Text>
              </Item>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
