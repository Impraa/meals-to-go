import mongoose, { Model } from "mongoose";
import { UserType } from "../../src/utils/Interfaces";

const Schema = mongoose.Schema;

const userSchema = new Schema<UserType>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
});

const User: Model<UserType> = mongoose.model<UserType>("User", userSchema);

export default User;
