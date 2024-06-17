import mongoose from "mongoose";

import { findItemBy, deleteAllItems, saveItems } from "./utils";
import { Artist, Release, Track } from "./models";
import { IArtist, IRelease, ITrack } from "../types";

import artistsDataJson from "../../data/artists.json";
import releasesDataJson from "../../data/releases.json";
import tracksDataJson from "../../data/tracks.json";

const artistsData = artistsDataJson as IArtist[];
const releasesData = releasesDataJson as IRelease[];
const tracksData = tracksDataJson as ITrack[];

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
    console.log("Deleting tracks");
    await deleteAllItems(Track);

    console.log("Creating artists");
    const artists = formatArtists(artistsData);
    await saveItems(Artist, artists);
    console.log("Creating releases");
    const releases = await formatReleases(releasesData);
    await saveItems(Release, releases);
    console.log("Creating tracks");
    const tracks = await formatTracks(tracksData);
    await saveItems(Track, tracks);
  } catch (error) {
    console.error("Error seeding the DB:", error);
  } finally {
    mongoose.disconnect();
    console.log("Finished seeding!");
  }
};

const formatArtists = (artistsData: IArtist[]) => {
  // Need to remove the _id key
  return artistsData.map((artist) => {
    const { _id, ...rest } = artist;
    return rest;
  });
};

const formatReleases = async (releasesData: IRelease[]) => {
  // Need to remove the _id, artistId and artistName keys
  const formattedReleases = await Promise.all(
    releasesData.map(async (release) => {
      const { _id, artistId, artistName, ...rest } = release;
      const artist = await findItemBy(Artist, "artistName", artistName);

      if (!artist || artist.length === 0) {
        throw new Error(`Artist not found for artistName: ${artistName}`);
      }

      return {
        artistId: artist[0]._id,
        artistName: artist[0].artistName,
        ...rest,
      };
    })
  );

  return formattedReleases;
};

const formatTracks = async (tracksData: ITrack[]) => {
  // Need to remove the _id and releaseId keys
  const formattedTracks = await Promise.all(
    tracksData.map(async (track) => {
      const { _id, releaseId, ...rest } = track;
      const r = releasesData.filter((r) => r._id === releaseId)[0];
      const release = await findItemBy(Release, "name", r.name);

      return {
        releaseId: release[0]._id,
        ...rest,
      };
    })
  );

  return formattedTracks;
};

seedDB();
