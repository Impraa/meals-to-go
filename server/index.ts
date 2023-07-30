if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
import express, { Request, Response } from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();

//Database

import mongoose from "mongoose";
import mongoSanitize from "express-mongo-sanitize";
import Restaurant from "./routes/Restaurant";
import User from "./routes/User";

mongoose.connect(process.env.DB_URL || "mongodb://localhost:27017/Meals-To-Go");

mongoose.connection.on(
  "error",
  console.error.bind(console, "Connection error")
);
mongoose.connection.once("open", () => {
  console.log("Database connected");
});

app.use(
  cors({
    origin: "exp://192.168.1.3:19000",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());

app.use("/restaurant", Restaurant);
app.use("/user", User);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

app.post("/payment", async (req, res) => {
  try {
    const amount: number = req.body.amount * 100;
    const token: string = req.body.token;
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        token,
      },
    });
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method: paymentMethod.id,
      confirm: true,
    });
    console.log(paymentIntent);
    return res.status(200).send(paymentIntent);
  } catch (error) {
    console.log({ error });

    return res.status(404).send(error);
  }
});

app.all("*", (req: Request, res: Response) => {
  res.status(404).send("Method not found");
});

app.listen(3000, () => {
  console.log(`Listening on a port 3000`);
});
