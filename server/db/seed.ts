import mongoose from "mongoose";

import { saveItems, deleteAllItems } from "./utils";
import { Artist } from "./models";
import artists from "../../data/artists.json";

require("dotenv").config();

const seedDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  try {
    console.log("Seeding...");
    await mongoose.connect(mongoURI);

    console.log("Deleting artists");
    await deleteAllItems(Artist);

    console.log("Creating artists");
    await saveItems(Artist, artists);
  } catch (error) {
    console.error("Error seeding the DB:", error);
  } finally {
    mongoose.disconnect();
    console.log("Finished seeding!");
  }
};

seedDB();
