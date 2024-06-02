import express, { Request, Response, NextFunction } from "express";

import { addToFile } from "../utils";
import favourites from "../../data/favourites.json";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;
  const userFavourites = favourites.filter(
    (favourite) => favourite.userId === userId
  );

  res.json(userFavourites);
});

router.post("/create", (req: Request, res: Response, next: NextFunction) => {
  addToFile(favourites, req.body, "data/favourites.json");

  res.status(204).send();
});

export default router;
