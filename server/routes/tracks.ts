import express, { Request, Response, NextFunction } from "express";

import tracksData from "../../data/tracks.json";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const { releaseId } = req.query;

  if (process.env.NODE_ENV !== "production") {
    return res.json(
      tracksData.filter((track) => track.releaseId === releaseId)
    );
  }
});

export default router;
