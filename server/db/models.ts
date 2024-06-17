import mongoose from "mongoose";

import { artistSchema, releaseSchema, trackSchema } from "./schemas";

const Artist = mongoose.model("Artist", artistSchema);
const Release = mongoose.model("Release", releaseSchema);
const Track = mongoose.model("Track", trackSchema);

export { Artist, Release, Track };
