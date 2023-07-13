import mongoose, { Model } from "mongoose";
import { RestaurantType } from "../../src/utils/Interfaces";

const Schema = mongoose.Schema;

const restaurantSchema = new Schema<RestaurantType>({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  photos: [
    {
      type: String,
    },
  ],
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  isOpenNow: {
    type: Boolean,
    required: true,
  },
  geometry: {
    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
    viewport: {
      northeast: {
        lat: {
          type: Number,
        },
        lng: {
          type: Number,
        },
      },
      southwest: {
        lat: {
          type: Number,
        },
        lng: {
          type: Number,
        },
      },
    },
  },
});

const Restaurant: Model<RestaurantType> = mongoose.model<RestaurantType>(
  "Restaurant",
  restaurantSchema
);

export default Restaurant;
