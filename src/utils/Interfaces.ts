import { ObjectId } from "mongoose";

export type RestaurantType = {
  _id: string;
  name: string;
  icon: string;
  photos: string[];
  address: string;
  rating: number;
  isOpenNow: boolean;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast?: {
        lat: number;
        lng: number;
      };
      southwest?: {
        lat: number;
        lng: number;
      };
    };
  };
};

export type RestaurantContextValue = {
  restaurant: RestaurantType[] | null;
  setRestaurant: (restaurant: RestaurantType[] | null) => void;
  isLoading: boolean | null;
  setIsLoading: (isLoading: boolean | null) => void;
};
