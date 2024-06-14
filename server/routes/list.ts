import express, { Request, Response, NextFunction } from "express";

import artistsData from "../../data/artists.json";
import releasesData from "../../data/releases.json";
import tracksData from "../../data/tracks.json";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV !== "production") {
    const followedArtists = artistsData.filter((artist) => artist.followed);
    const followedReleases = releasesData.filter((release) =>
      followedArtists.find((artist) => artist._id === release.artistId)
    );
    const releasesWithTracks = followedReleases
      .map((release) => {
        const releaseTracks = tracksData.filter(
          (track) => track.releaseId === release._id && !track.listened
        );

        if (releaseTracks.length > 0) {
          return {
            ...release,
            tracks: releaseTracks,
          };
        } else {
          return null;
        }
      })
      .filter((release) => release !== null);
    return res.json(releasesWithTracks);
  }
});

export default router;
