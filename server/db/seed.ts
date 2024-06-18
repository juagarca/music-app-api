import mongoose from "mongoose";

import { deleteAllItems, fetchItemBy, saveItems } from "./queries/common";
import { Artist, Release } from "./models";
import { IArtist, IRelease } from "../types";

import artistsDataJson from "./data/artists";
import releasesDataJson from "./data/releases";

const artistsData = artistsDataJson as IArtist[];
const releasesData = releasesDataJson as IRelease[];

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
    console.log("Deleting releases");
    await deleteAllItems(Release);

    console.log("Creating artists");
    await saveItems(Artist, artistsData);
    console.log("Creating releases");
    await saveItems(Release, releasesData);
  } catch (error) {
    console.error("Error seeding the DB:", error);
  } finally {
    mongoose.disconnect();
    console.log("Finished seeding!");
  }
};

seedDB();
