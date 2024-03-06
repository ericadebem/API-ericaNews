import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./src/routes/user.route.js";
import { authRouter } from "./src/routes/auth.route.js";

dotenv.config();
const app = express();
const DB_KEY = process.env.DB_KEY;
const PORT = process.env.PORT || 8080;
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/auth", authRouter);

const startServer = async () => {
  await mongoose.connect(DB_KEY, mongooseOptions);
  app.listen(PORT, () =>
    console.log(`MongoDB Atlas Connected :) Server is running on port ${PORT}`)
  );
};

startServer();
