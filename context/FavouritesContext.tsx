import React, {
  ReactNode,
  useState,
  createContext,
  useEffect,
  useContext,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FavouritesContextValue,
  RestaurantType,
} from "../src/utils/Interfaces";
import { UserContext } from "./UserContext";

export const FavouritesContext = createContext({} as FavouritesContextValue);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<RestaurantType[]>([]);

  const { user } = useContext(UserContext);

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
      await AsyncStorage.setItem(`favourties-${user?.email}`, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(`favourties-${user?.email}`);
      if (jsonValue) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user) loadFavourites();
  }, [user]);

  useEffect(() => {
    if (user) saveFavourite(favourites);
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider value={{ favourites, add, remove }}>
      {children}
    </FavouritesContext.Provider>
  );
};
