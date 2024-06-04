import express, { Request, Response, NextFunction } from "express";

import { fetchAllItems, findItemById } from "../db/utils";
import { Artist } from "../db/models";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.json(await fetchAllItems(Artist));
});

router.get(
  "/:artistId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { artistId } = req.params;

    res.json(await findItemById(Artist, artistId));
  }
);

export default router;
