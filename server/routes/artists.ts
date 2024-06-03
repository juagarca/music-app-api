import express, { Request, Response, NextFunction } from "express";

import { fetchAllItems, saveItem } from "../db/utils";
import { Artist } from "../db/models";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.json(await fetchAllItems(Artist));
});

// router.get("/:artistId", (req: Request, res: Response, next: NextFunction) => {
//   const { artistId } = req.params;
//   const artist = artists.find((artist) => artist.id === artistId);

//   res.json(artist || {});
// });

export default router;
