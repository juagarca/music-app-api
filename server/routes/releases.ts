import express, { Request, Response, NextFunction } from "express";

import { fetchItemBy } from "../db/queries/common";
import {
  fetchAllReleases,
  fetchUnlistenedReleases,
  updateTrackListened,
} from "../db/queries/releases";
import { Release } from "../db/models";
import { ITrack } from "../types";

const router = express.Router({ mergeParams: true });

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const { artistId } = req.query;
  const releases = await fetchAllReleases(String(artistId));

  if (releases.length > 0) return res.json(releases);
  return res.status(404).send();
});

router.get(
  "/pending",
  async (req: Request, res: Response, next: NextFunction) => {
    return res.json(await fetchUnlistenedReleases());
  }
);

// router.get(
//   "/upcoming",
//   async (req: Request, res: Response, next: NextFunction) => {
//     if (process.env.NODE_ENV !== "production") {
//       const followedArtists = artistsData.filter((artist) => artist.followed);
//       const upcomingReleases: IRelease[] = releasesData.reduce(
//         (acc: IRelease[], release) => {
//           const artist = followedArtists.find(
//             (artist) => artist._id === release.artistId
//           );
//           if (
//             artist &&
//             release.releaseDate &&
//             new Date(release.releaseDate) > new Date()
//           ) {
//             acc.push(release as IRelease);
//           }
//           return acc;
//         },
//         [] as IRelease[]
//       );

//       upcomingReleases.sort((a, b) => {
//         return (
//           new Date(a.releaseDate!).getTime() -
//           new Date(b.releaseDate!).getTime()
//         );
//       });

//       return res.json(upcomingReleases);
//     }
//   }
// );

router.get(
  "/:releaseId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { releaseId } = req.params;

    return res.json(await fetchItemBy(Release, "_id", releaseId));
  }
);

router.get("/:releaseId/tracks", async (req: Request, res: Response) => {
  const { releaseId } = req.params;
  const release = await fetchItemBy(Release, "_id", releaseId);

  return res.json(release.tracks);
});

router.patch(
  "/:releaseId/tracks/:trackId",
  async (req: Request, res: Response) => {
    const { releaseId, trackId } = req.params;
    const release = await fetchItemBy(Release, "_id", releaseId);

    if (release) {
      const track = release.tracks.find(
        (track: ITrack) => String(track._id) === trackId
      );
      track.listened = !track.listened;
      return res.json(await updateTrackListened(Release, releaseId, track));
    }

    return res.status(404).send();
  }
);

export default router;
