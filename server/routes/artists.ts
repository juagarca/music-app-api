import express, { Request, Response, NextFunction } from "express";

import artists from "../../data/artists.json";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json(artists);
});

router.get("/:artistId", (req: Request, res: Response, next: NextFunction) => {
  const { artistId } = req.params;
  const artist = artists.find((artist) => artist.id === artistId);

  res.json(artist || {});
});

export default router;
