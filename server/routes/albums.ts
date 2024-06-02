import express, { Request, Response, NextFunction } from "express";

import albums from "../../data/albums.json";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json(albums);
});

router.get("/:albumId", (req: Request, res: Response, next: NextFunction) => {
  const { albumId } = req.params;
  const album = albums.find((album) => album.id === albumId);

  res.json(album || {});
});

export default router;
