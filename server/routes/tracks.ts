import express, { Request, Response, NextFunction } from "express";

import { saveToFile } from "../utils";
import { ITrack } from "../types";

import tracksDataJson from "../../data/tracks.json";
const tracksData = tracksDataJson as ITrack[];

const router = express.Router({ mergeParams: true });

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const { releaseId } = req.query;

  if (process.env.NODE_ENV !== "production") {
    return res.json(
      tracksData.filter((track) => track.releaseId === releaseId)
    );
  }
});

router.patch(
  "/:trackId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { trackId } = req.params;
    const { listened } = req.query;

    if (process.env.NODE_ENV !== "production") {
      const track = tracksData.find((track) => track._id === trackId);

      if (track) {
        track.listened = listened === "true";
        saveToFile("./data/tracks.json", tracksData);
        return res.json(track);
      }
      return res.status(404).send();
    }
  }
);

export default router;
