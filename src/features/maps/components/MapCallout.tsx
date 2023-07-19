import React from "react";
import { Image, StyleSheet, View, Text, Platform } from "react-native";
import WebView from "react-native-webview";
import { RestaurantType } from "../../../utils/Interfaces";
import styled from "styled-components/native";
import { fontSizes, fonts } from "../../../utils/Infrastructure";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 75px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  align-self: flex-start;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const MapCallout: React.FC<{ restaurant: RestaurantType }> = ({
  restaurant,
}) => {
  return (
    <Item>
      {Platform.OS === "android" ? (
        <CompactWebview source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}
      <Text
        style={{
          paddingVertical: 10,
          fontFamily: fonts.heading,
          fontSize: fontSizes.caption,
        }}
      >
        {restaurant.name}
      </Text>
    </Item>
  );
};
