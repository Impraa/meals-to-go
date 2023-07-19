import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../context/FavouritesContext";
import styled from "styled-components/native";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = () => {
  const { favourites, add, remove } = useContext(FavouritesContext);

  return (
    <FavouriteButton>
      <AntDesign name="heart" size={24} color={"red"} />
    </FavouriteButton>
  );
};
