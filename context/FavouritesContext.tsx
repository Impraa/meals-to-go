import React, { ReactNode, useState, createContext } from "react";
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

  return (
    <FavouritesContext.Provider value={{ favourites, add, remove }}>
      {children}
    </FavouritesContext.Provider>
  );
};
