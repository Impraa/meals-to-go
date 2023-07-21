import React, { ReactNode, useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FavouritesContextValue,
  RestaurantType,
} from "../src/utils/Interfaces";

export const FavouritesContext = createContext({} as FavouritesContextValue);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<RestaurantType[]>([]);

  const add = (restaurant: RestaurantType) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: RestaurantType) => {
    const newFavourites = favourites.filter(
      (item) => item._id !== restaurant._id
    );

    setFavourites(newFavourites);
  };

  const saveFavourite = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("favourties", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("favourties");
      if (jsonValue) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourite(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider value={{ favourites, add, remove }}>
      {children}
    </FavouritesContext.Provider>
  );
};
