import express, { Request, Response, NextFunction } from "express";

import {
  fetchAllItems,
  fetchItemBy,
  searchItemsBy,
  updateItem,
} from "../db/queries/common";
import { Artist } from "../db/models";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const { query } = req.query;

  if (query) {
    const artists = await searchItemsBy(
      Artist,
      "artistName",
      String(query),
      "artistName"
    );
    return res.json(artists);
  }

  res.json(await fetchAllItems(Artist, "artistName"));
});

router.get(
  "/:artistId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { artistId } = req.params;
    const artist = await fetchItemBy(Artist, "_id", artistId);

    return res.json(artist);
  }
);

router.patch(
  "/:artistId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { artistId } = req.params;
    const { followed } = req.query;
    const artist = await fetchItemBy(Artist, "_id", artistId);

    if (artist) {
      artist.followed = followed === "true";
      return res.json(await updateItem(Artist, artist));
    }

    return res.status(404).send();
  }
);

export default router;
