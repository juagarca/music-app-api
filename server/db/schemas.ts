import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

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
    followed: {
      type: Boolean,
      default: false,
    },
    members: {
      type: [String],
    },
    photoUrl: {
      type: String,
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
      type: ObjectId,
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
    photoUrl: {
      type: String,
    },
    tracks: [
      {
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
        featuring: [
          {
            artistId: {
              type: ObjectId,
              required: true,
            },
            artistName: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export { artistSchema, releaseSchema };
