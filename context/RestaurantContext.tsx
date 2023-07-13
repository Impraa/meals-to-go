import React, { ReactNode, createContext, useState } from "react";
import {
  RestaurantContextValue,
  RestaurantType,
} from "../src/utils/Interfaces";

export const RestaurantContext = createContext<RestaurantContextValue>({
  restaurant: null,
  setRestaurant: () => {},
});

export const RestaurantProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);

  return (
    <RestaurantContext.Provider value={{ restaurant, setRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};
