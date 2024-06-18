import { Types } from "mongoose";

interface IArtist {
  _id: Types.ObjectId;
  artistName: string;
  name?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  bio?: string;
  members?: string[];
  photoUrl?: string;
  followed: boolean;
}

interface IFeaturingArtist {
  _id: Types.ObjectId;
  artistId: Types.ObjectId;
  artistName: string;
}

interface IRelease {
  _id: Types.ObjectId;
  name: string;
  artistId?: Types.ObjectId;
  artistName: string;
  type: "ALBUM" | "EP" | "MIXTAPE" | "SINGLE";
  releaseDate?: string;
  duration?: number;
  photoUrl?: string;
  tracks?: ITrack[];
}

interface ITrack {
  _id: Types.ObjectId;
  name: string;
  number: number;
  duration: number;
  listened: boolean;
  featuring?: IFeaturingArtist[];
}

export type { IArtist, IFeaturingArtist, IRelease, ITrack };
