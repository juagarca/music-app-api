import mongoose from "mongoose";

import { artistSchema } from "./schemas";

const Artist = mongoose.model("Artist", artistSchema);

export { Artist };
