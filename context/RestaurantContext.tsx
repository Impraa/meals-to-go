import React, { ReactNode, createContext, useState } from "react";
import {
  RestaurantContextValue,
  RestaurantType,
} from "../src/utils/Interfaces";
import axios from "axios";
import { useEffect } from "react";

export const RestaurantContext = createContext<RestaurantContextValue>({
  restaurant: null,
  setRestaurant: () => {},
  isLoading: null,
  setIsLoading: () => {},
});

export const RestaurantProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [restaurant, setRestaurant] = useState<RestaurantType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const FetchRestaurantData = async () => {
    axios
      .get("http://192.168.1.3:3000/restaurant/", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setIsLoading(false);
        setRestaurant(data as unknown as RestaurantType[]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    FetchRestaurantData();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{ restaurant, setRestaurant, isLoading, setIsLoading }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
