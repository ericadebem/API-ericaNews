import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    password: Number,
    avatar: String,
    backgrund: String,
  },
  {
    versionKey: false,
    collection: "user",
  }
);

export const User = mongoose.model("User", UserSchema);
