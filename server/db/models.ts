import mongoose from "mongoose";

import { artistSchema, releaseSchema } from "./schemas";

const Artist = mongoose.model("Artist", artistSchema);
const Release = mongoose.model("Release", releaseSchema);

export { Artist, Release };
