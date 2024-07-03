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

    if (artists.length > 0) return res.json(artists);
    return res.status(404).send();
  }

  const artists = await fetchAllItems(Artist, "artistName");

  if (artists.length > 0) return res.json(artists);
  return res.status(404).send();
});

router.get(
  "/:artistId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { artistId } = req.params;
    const artist = await fetchItemBy(Artist, "_id", artistId);

    if (artist) return res.json(artist);
    return res.status(404).send();
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
      const updatedItem = await updateItem(Artist, artist);

      if (updatedItem) return res.json(updateItem);
      return res.status(422).send();
    }

    return res.status(404).send();
  }
);

export default router;
