import express, { Request, Response, NextFunction } from "express";

import { IListRelease, IRelease } from "../types";

import artistsData from "../../data/artists.json";
import releasesData from "../../data/releases.json";
import tracksData from "../../data/tracks.json";

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
  "/pending",
  async (req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV !== "production") {
      const pendingReleases: IListRelease[] = releasesData.reduce(
        (acc: IListRelease[], release) => {
          const pendingTracks = tracksData.filter(
            (track) => track.releaseId === release._id && !track.listened
          );

          if (pendingTracks.length > 0 && release.releaseDate) {
            const pendingReleaseWithTracks = {
              ...release,
              tracks: pendingTracks,
            } as IListRelease;
            acc.push(pendingReleaseWithTracks);
          }

          return acc;
        },
        []
      );

      pendingReleases.sort((a, b) => {
        return (
          new Date(b.releaseDate!).getTime() -
          new Date(a.releaseDate!).getTime()
        );
      });

      return res.json(pendingReleases);
    }
  }
);

router.get(
  "/upcoming",
  async (req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV !== "production") {
      const followedArtists = artistsData.filter((artist) => artist.followed);
      const upcomingReleases: IRelease[] = releasesData.reduce(
        (acc: IRelease[], release) => {
          const artist = followedArtists.find(
            (artist) => artist._id === release.artistId
          );
          if (
            artist &&
            release.releaseDate &&
            new Date(release.releaseDate) > new Date()
          ) {
            acc.push(release as IRelease);
          }
          return acc;
        },
        [] as IRelease[]
      );

      upcomingReleases.sort((a, b) => {
        return (
          new Date(a.releaseDate!).getTime() -
          new Date(b.releaseDate!).getTime()
        );
      });

      return res.json(upcomingReleases);
    }
  }
);

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
