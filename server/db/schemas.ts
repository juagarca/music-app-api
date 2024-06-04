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

export { artistSchema };
