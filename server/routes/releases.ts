import express, { Request, Response, NextFunction } from "express";

import releasesData from "../../data/releases.json";

const router = express.Router({ mergeParams: true });

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const { artistId } = req.query;

  if (process.env.NODE_ENV !== "production") {
    return res.json(
      releasesData.filter((release) => release.artistId === artistId)
    );
  }
});

router.get(
  "/:releaseId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { releaseId } = req.params;

    if (process.env.NODE_ENV !== "production") {
      return res.json(
        releasesData.find((release) => release._id === releaseId)
      );
    }
  }
);

export default router;
