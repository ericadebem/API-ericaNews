import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userRoute } from "./src/routes/user.route";

dotenv.config();
const app = express();
const DB_KEY = process.env.DB_KEY;
const PORT = 3000;
const mongooseOptions = {
  useNewParser: true,
  unifiedTopology: true,
};
app.use(cors());
app.use(express.json());

app.use("/user", userRoute);

const startServer = async () => {
  mongoose.connect(DB_KEY);
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

startServer();
