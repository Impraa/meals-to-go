export type RestaurantType = {
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
  restaurant: RestaurantType | null;
  setRestaurant: (restaurant: RestaurantType | null) => void;
};
