import mongoose from "mongoose";

const artistSchema = new mongoose.Schema(
  {
    artistName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    placeOfBirth: {
      type: String,
    },
    bio: {
      type: String,
    },
    members: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const releaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    artistId: {
      type: String,
      required: true,
    },
    artistName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["ALBUM", "EP", "MIXTAPE", "SINGLE"],
      required: true,
    },
    releaseDate: {
      type: Date,
    },
    duration: {
      type: Number,
    },
    numberOfTracks: {
      type: Number,
    },
    photoUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const trackSchema = new mongoose.Schema(
  {
    releaseId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    listened: {
      type: Boolean,
      default: false,
    },
    featuring: {
      type: [
        {
          artistId: {
            type: String,
            required: true,
          },
          artistName: {
            type: String,
            required: true,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

export { artistSchema, releaseSchema, trackSchema };
