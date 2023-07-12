import express, { Request, Response } from "express";

import Restaurant from "../models/Restaurants";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const restaurants = await Restaurant.find();

    return res.status(200).send(restaurants);
  } catch (error) {
    return res.status(500).send("Database error");
  }
});

router.get("/:RestaurantID", async (req: Request, res: Response) => {
  const { RestaurantID } = req.params;

  try {
    const restaurant = await Restaurant.findById(RestaurantID);

    return res.status(200).send(restaurant);
  } catch (error) {
    return res.status(500).send("Database error");
  }
});

router.post("/", async (req: Request, res: Response) => {
  const {
    name,
    icon,
    photos,
    address,
    rating,
    isOpenNow,
    locationLat,
    locationLng,
    viewportLat,
    viewportLng,
    northeastLat,
    northeastLng,
    southwestLat,
    southwestLng,
  } = req.body;

  try {
    const restaurant = new Restaurant({
      name: name,
      icon: icon,
      address: address,
      rating: rating,
      isOpenNow: isOpenNow,
    });

    restaurant.geometry.location.lat = locationLat;
    restaurant.geometry.location.lng = locationLng;
    restaurant.geometry.viewport.lat = viewportLat;
    restaurant.geometry.viewport.lng = viewportLng;

    restaurant.geometry.viewport.northeast!.lat = northeastLat;
    restaurant.geometry.viewport.northeast!.lng = northeastLng;

    restaurant.geometry.viewport.southwest!.lat = southwestLat;
    restaurant.geometry.viewport.southwest!.lng = southwestLng;

    if (photos) {
      restaurant.photos = photos;
    }

    await restaurant.save();

    return res.status(201).send(restaurant);
  } catch (error) {
    return res.status(500).send("Database error");
  }
});

router.delete("/:RestaurantID", async (req: Request, res: Response) => {
  const { RestaurantID } = req.params;

  try {
    await Restaurant.findByIdAndDelete(RestaurantID);

    return res.status(200).send("Restaurant deleted");
  } catch (error) {
    return res.status(500).send("Database error");
  }
});

router.put("/", async (req: Request, res: Response) => {
  const {
    name,
    icon,
    photos,
    address,
    rating,
    isOpenNow,
    locationLat,
    locationLng,
    viewportLat,
    viewportLng,
    northeastLat,
    northeastLng,
    southwestLat,
    southwestLng,
    RestaurantID,
  } = req.body;

  try {
    const restaurant = await Restaurant.findById(RestaurantID);

    if (restaurant) {
      restaurant.name = name;
      restaurant.icon = icon;
      restaurant.address = address;
      restaurant.rating = rating;
      restaurant.isOpenNow = isOpenNow;
      restaurant.geometry.location.lat = locationLat;
      restaurant.geometry.location.lng = locationLng;
      restaurant.geometry.viewport.lat = viewportLat;
      restaurant.geometry.viewport.lng = viewportLng;

      if (restaurant.geometry.viewport.northeast) {
        restaurant.geometry.viewport.northeast.lat = northeastLat;
        restaurant.geometry.viewport.northeast.lng = northeastLng;
      }

      if (restaurant.geometry.viewport.southwest) {
        restaurant.geometry.viewport.southwest.lat = southwestLat;
        restaurant.geometry.viewport.southwest.lng = southwestLng;
      }

      if (photos) {
        restaurant.photos = photos;
      }

      await restaurant.save();

      return res.status(201).send(restaurant);
    }

    return res.status(404).send("Restaurant not found");
  } catch (error) {
    return res.status(500).send("Database error");
  }
});

export default router;
