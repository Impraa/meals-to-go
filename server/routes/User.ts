import express, { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const foundUser = await User.findOne({ username: username });

    if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
      return res.status(200).send(foundUser);
    }
    return res.status(404).send("Wrong username or password");
  } catch (error) {
    return res.status(500).send("Database error");
  }
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;

    const hashedPass = bcrypt.hashSync(password, 10);

    const newUser = new User({
      email: email,
      password: hashedPass,
      username: username,
    });

    await newUser.save();

    return res.status(201).send(newUser);
  } catch (error) {
    return res
      .status(500)
      .send("Database error, email and username must be unique");
  }
});

export default router;
