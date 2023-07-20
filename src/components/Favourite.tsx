import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../context/FavouritesContext";
import styled from "styled-components/native";
import { RestaurantType } from "../utils/Interfaces";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite: React.FC<{ restaurant: RestaurantType }> = ({
  restaurant,
}) => {
  const { favourites, add, remove } = useContext(FavouritesContext);

  const isFavourite = favourites?.find((item) => item._id === restaurant._id);

  return (
    <FavouriteButton
      onPress={() => (!isFavourite ? add(restaurant) : remove(restaurant))}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
