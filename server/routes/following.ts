// TODO: Implement this with DB instead of using a json file.
import express, { Request, Response, NextFunction } from "express";
import { writeFile } from "fs";

import { IFollower } from "../types";

import followersDataJson from "../../data/followers.json";

const router = express.Router();
const followersData: IFollower = followersDataJson as IFollower;

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const { userId, artistId } = req.query;

  if (!userId || !artistId) {
    return res.status(422).send();
  }

  if (followersData[String(userId)].includes(String(artistId))) {
    res.json({ status: "following" });
  }

  res.json({ status: "unfollowed" });
});

router.patch("/update", (req: Request, res: Response, next: NextFunction) => {
  const { userId, artistId, follow } = req.body;

  if (follow) {
    followersData[userId].push(artistId);
  } else {
    followersData[userId] = followersData[userId].filter(
      (id: string) => id !== artistId
    );
    console.log(followersData[userId]);
  }

  writeFile("data/followers.json", JSON.stringify(followersData), (err) => {
    if (err) throw err;
    console.log(`Added follow with artistId: ${artistId} added`);
  });

  res.status(204).send();
});

export default router;
