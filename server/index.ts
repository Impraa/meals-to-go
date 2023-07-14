if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
import express, { Request, Response } from "express";

import cors from "cors";

const app = express();

//Database

import mongoose from "mongoose";
import mongoSanitize from "express-mongo-sanitize";
import Restaurant from "./routes/Restaurant";

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

app.all("*", (req: Request, res: Response) => {
  res.status(404).send("Method not found");
});

app.listen(3000, () => {
  console.log(`Listening on a port 3000`);
});
