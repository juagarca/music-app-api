import express from "express";
import logger from "morgan";
import cors from "cors";
import mongoose from "mongoose";

import { artistsRouter, releasesRouter, tracksRouter } from "./routes";

require("dotenv").config();

if (process.env.NODE_ENV == "production") {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  mongoose
    .set("debug", true)
    .connect(mongoURI)
    .then(() => {
      console.log("Successfully connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
}

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/artists", artistsRouter);
app.use("/releases", releasesRouter);
app.use("/tracks", tracksRouter);

export default app;
