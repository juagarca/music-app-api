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

interface ITrack {
  _id: string;
  releaseId: string;
  name: string;
  number: number;
  duration: number;
  listened: boolean;
  featuring?: IFeaturingArtist[];
}

export type { IArtist, IFeaturingArtist, ITrack };
