import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "E-mail is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      unique: true,
    },
    avatar: {
      type: String,
      required: [true, "Username is required"],
    },
    backgrund: {
      type: String,
      required: [true, "Username is required"],
    },
  },
  {
    versionKey: false,
    collection: "user",
  }
);

export const User = mongoose.model("User", UserSchema);
