import express from "express";
import logger from "morgan";
import cors from "cors";

import { artistsRouter, albumsRouter, favouritesRouter } from "./routes";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/artists", artistsRouter);
app.use("/albums", albumsRouter);
app.use("/favourites", favouritesRouter);

export default app;
