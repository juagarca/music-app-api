import { Types } from "mongoose";

import artists from "./artists";

const fetchArtistId = (name: string): Types.ObjectId => {
  const artist = artists.find((artist) => artist.artistName === name);

  if (artist) {
    return artist._id;
  } else {
    throw new Error("Artist not found");
  }
};

export default [
  {
    _id: new Types.ObjectId(),
    name: "Moonlight",
    artistId: fetchArtistId("Darin"),
    artistName: "Darin",
    type: "SINGLE",
    releaseDate: "2024-05-24",
    duration: 156,
    photoUrl:
      "https://res.cloudinary.com/dfe3d8qmn/image/upload/fl_preserve_transparency/v1717855442/releases/moonlight.jpg",
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "Moonlight",
        number: 1,
        duration: 156,
        listened: false,
      },
    ],
  },
  {
    _id: new Types.ObjectId(),
    name: "BRAT",
    artistId: fetchArtistId("Charli xcx"),
    artistName: "Charli xcx",
    type: "ALBUM",
    releaseDate: "2024-06-07",
    duration: 2523,
    photoUrl:
      "https://res.cloudinary.com/dfe3d8qmn/image/upload/fl_preserve_transparency/v1718129671/releases/charli-xcx-brat_kvpur9.jpg",
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "360",
        number: 1,
        duration: 134,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "Club classics",
        number: 2,
        duration: 154,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "Sympathy is a knife",
        number: 3,
        duration: 151,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "I might say something stupid",
        number: 4,
        duration: 109,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "Talk talk",
        number: 5,
        duration: 162,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "Von dutch",
        number: 6,
        duration: 164,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "Everything is romantic",
        number: 7,
        duration: 134,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "Rewind",
        number: 8,
        duration: 203,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "So I",
        number: 9,
        duration: 211,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "Girl, so confusing",
        number: 10,
        duration: 175,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "Apple",
        number: 11,
        duration: 152,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "B2b",
        number: 12,
        duration: 179,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "Mean girls",
        number: 13,
        duration: 189,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "I think about it all the time",
        number: 14,
        duration: 136,
        listened: false,
      },
      {
        _id: new Types.ObjectId(),
        name: "365",
        number: 15,
        duration: 204,
        listened: false,
      },
    ],
  },
  {
    _id: new Types.ObjectId(),
    name: "LUBE // WET DREAM",
    artistId: fetchArtistId("Adam Lambert"),
    artistName: "Adam Lambert",
    type: "EP",
    releaseDate: "2024-05-31",
    duration: 346,
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "LUBE",
        number: 1,
        duration: 167,
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "WET DREAM",
        number: 2,
        duration: 179,
        listened: true,
      },
    ],
  },
  {
    _id: new Types.ObjectId(),
    name: "Another Lover",
    artistId: fetchArtistId("VINCINT"),
    artistName: "VINCINT",
    type: "SINGLE",
    releaseDate: "2024-05-17",
    duration: 183,
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "Another Lover",
        number: 1,
        duration: 183,
        listened: false,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Adam Lambert"),
            artistName: "Adam Lambert",
          },
        ],
      },
    ],
  },
  {
    _id: new Types.ObjectId(),
    name: "Pop 2",
    artistId: fetchArtistId("Charli xcx"),
    artistName: "Charli xcx",
    type: "MIXTAPE",
    releaseDate: "2017-12-15",
    duration: 474,
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "Out Of My Head",
        number: 1,
        duration: 236,
        listened: false,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Tove Lo"),
            artistName: "Tove Lo",
          },
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("ALMA"),
            artistName: "ALMA",
          },
        ],
      },
    ],
  },
  {
    _id: new Types.ObjectId(),
    name: "C,XOXO",
    artistId: fetchArtistId("Camila Cabello"),
    artistName: "Camila Cabello",
    type: "ALBUM",
    releaseDate: "2024-06-28",
  },
  {
    _id: new Types.ObjectId(),
    name: "CRASH",
    artistId: fetchArtistId("Kehlani"),
    artistName: "Kehlani",
    type: "ALBUM",
    releaseDate: "2024-06-21",
  },
];
