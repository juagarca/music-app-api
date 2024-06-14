interface IArtist {
  _id: string;
  artistName: string;
  name?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  bio?: string;
  members: string[];
  photoUrl?: string;
  followed: boolean;
}

interface IFeaturingArtist {
  artistId: string;
  artistName: string;
}

interface IRelease {
  _id: string;
  name: string;
  artistId: string;
  artistName: string;
  type: "ALBUM" | "EP" | "MIXTAPE" | "SINGLE";
  releaseDate: string;
  duration: number;
  numberOfTracks: number;
  photoUrl?: string;
}

interface ITrack {
  _id: string;
  releaseId: string;
  name: string;
  number: number;
  duration: number;
  listened: boolean;
  featuring?: IFeaturingArtist[];
}

export type { IArtist, IFeaturingArtist, IRelease, ITrack };
