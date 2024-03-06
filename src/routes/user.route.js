import express from "express";
import { getUser, getAllUsers, postUser, updateUser, deleteUser } from "../controllers/user.controller.js"; 
export const userRouter = express.Router();

userRouter.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);
userRouter.route("/").post(postUser).get(getAllUsers);
