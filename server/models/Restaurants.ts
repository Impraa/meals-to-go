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
  isClosedTemporarily: {
    type: Boolean,
    required: true,
  },
  geometry: {
    viewport: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
    northeast: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
    southwest: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  },
});

const Restaurant: Model<RestaurantType> = mongoose.model<RestaurantType>(
  "Restaurant",
  restaurantSchema
);

export default Restaurant;
