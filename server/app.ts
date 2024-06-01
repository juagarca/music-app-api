import express from "express";
import logger from "morgan";
import artistsRouter from "./routes/artists";
import songsRouter from "./routes/songs";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/artists", artistsRouter);
app.use("/songs", songsRouter);

export default app;
