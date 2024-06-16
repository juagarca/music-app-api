import express, { Request, Response, NextFunction } from "express";

import { fetchAllItems, findItemById } from "../db/utils";
import { Artist } from "../db/models";
import { IArtist } from "../types";
import { saveToFile } from "../utils";

import artistsDataJson from "../../data/artists.json";
const artistsData = artistsDataJson as IArtist[];

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV !== "production") {
    const { query } = req.query;

    if (query) {
      const artists = artistsData.filter((artist) =>
        artist.artistName?.toLowerCase().includes(String(query).toLowerCase())
      );
      return res.json(artists);
    }
    return res.json(artistsData);
  }

  // res.json(await fetchAllItems(Artist));
});

router.get(
  "/:artistId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { artistId } = req.params;

    if (process.env.NODE_ENV !== "production") {
      return res.json(artistsData.find((artist) => artist._id === artistId));
    }

    // res.json(await findItemById(Artist, artistId));
  }
);

router.patch(
  "/:artistId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { artistId } = req.params;
    const { followed } = req.query;

    if (process.env.NODE_ENV !== "production") {
      const artist = artistsData.find((artist) => artist._id === artistId);

      if (artist) {
        artist.followed = followed === "true";
        saveToFile("./data/artists.json", artistsData);
        return res.status(204);
      }
      return res.status(404).send();
    }
  }
);

export default router;
