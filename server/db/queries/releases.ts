import { Model } from "mongoose";

import { Release } from "../models";
import { ITrack } from "../../types";

const fetchAllReleases = async (artistId: string) => {
  try {
    return await Release.find({ artistId: artistId })
      .sort({ artistId: 1 })
      .select("-__v -createdAt -updatedAt");
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching items from database");
  }
};

const fetchUnlistenedReleases = async () => {
  try {
    // Aggregate pipeline to filter releases with unlistened tracks
    const releases = await Release.aggregate([
      {
        $addFields: {
          tracks: {
            $filter: {
              input: "$tracks",
              as: "track",
              cond: { $eq: ["$$track.listened", false] },
            },
          },
        },
      },
      {
        $match: {
          "tracks.0": { $exists: true }, // Match releases with at least one unlistened track
        },
      },
    ]);

    return releases;
  } catch (error) {
    console.error("Error fetching releases:", error);
    throw error;
  }
};

const updateTrackListened = async (
  Model: Model<any>,
  releaseId: string,
  track: ITrack
) => {
  try {
    const updatedItem = await Model.updateOne(
      { _id: releaseId, "tracks._id": track._id },
      { $set: { "tracks.$.listened": track.listened } },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    console.log("Item updated");
    return updatedItem;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating item in database");
  }
};

export { fetchAllReleases, fetchUnlistenedReleases, updateTrackListened };
