import React from "react";
import { createContext, ReactNode, useState } from "react";
import { CartContextValue, RestaurantType } from "../src/utils/Interfaces";

export const CartContext = createContext({} as CartContextValue);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<RestaurantType[]>([]);

  const addCartItem = (restaurant: RestaurantType) => {
    setCart([...cart, restaurant] as RestaurantType[]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addCartItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
