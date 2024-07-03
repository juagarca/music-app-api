import { Types } from "mongoose";

import artists from "./artists";

const fetchArtistId = (name: string): Types.ObjectId | null => {
  const artist = artists.find((artist) => artist.artistName === name);

  if (artist) {
    return artist._id;
  } else {
    return null;
  }
};

const formatDuration = (duration: string): number => {
  let totalSeconds = 0;
  const parts = duration.split(":").map((value) => parseInt(value, 10));

  if (parts.length === 3) {
    // Format is "HH:MM:SS"
    const [hours, minutes, seconds] = parts;
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
  } else if (parts.length === 2) {
    // Format is "MM:SS"
    const [minutes, seconds] = parts;
    totalSeconds = minutes * 60 + seconds;
  } else {
    throw new Error("Invalid duration format");
  }

  return totalSeconds;
};

export default [
  {
    _id: new Types.ObjectId(),
    name: "Moonlight",
    artistId: fetchArtistId("Darin"),
    artistName: "Darin",
    type: "SINGLE",
    releaseDate: "2024-05-24",
    duration: formatDuration("2:37"),
    photoUrl:
      "https://res.cloudinary.com/dfe3d8qmn/image/upload/fl_preserve_transparency/v1717855442/releases/moonlight.jpg",
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "Moonlight",
        number: 1,
        duration: formatDuration("2:37"),
        listened: true,
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
    duration: formatDuration("41:31"),
    photoUrl:
      "https://res.cloudinary.com/dfe3d8qmn/image/upload/fl_preserve_transparency/v1718129671/releases/charli-xcx-brat_kvpur9.jpg",
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "360",
        number: 1,
        duration: formatDuration("2:14"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Club classics",
        number: 2,
        duration: formatDuration("2:34"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Sympathy is a knife",
        number: 3,
        duration: formatDuration("2:31"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "I might say something stupid",
        number: 4,
        duration: formatDuration("1:49"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Talk talk",
        number: 5,
        duration: formatDuration("2:42"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Von dutch",
        number: 6,
        duration: formatDuration("2:44"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Everything is romantic",
        number: 7,
        duration: formatDuration("3:23"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Rewind",
        number: 8,
        duration: formatDuration("2:48"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "So I",
        number: 9,
        duration: formatDuration("3:31"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Girl, so confusing",
        number: 10,
        duration: formatDuration("2:55"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Apple",
        number: 11,
        duration: formatDuration("2:32"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "B2b",
        number: 12,
        duration: formatDuration("2:59"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Mean girls",
        number: 13,
        duration: formatDuration("3:09"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "I think about it all the time",
        number: 14,
        duration: formatDuration("2:16"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "365",
        number: 15,
        duration: formatDuration("3:24"),
        listened: true,
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
    duration: formatDuration("5:46"),
    photoUrl:
      "https://res.cloudinary.com/dfe3d8qmn/image/upload/v1720028375/releases/tyzulattokfhts1jzlci.png",
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "LUBE",
        number: 1,
        duration: formatDuration("2:47"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "WET DREAM",
        number: 2,
        duration: formatDuration("2:59"),
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
    duration: formatDuration("3:03"),
    photoUrl:
      "https://res.cloudinary.com/dfe3d8qmn/image/upload/v1720028455/releases/s3bjo3rbuz3h9p2n0gce.png",
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "Another Lover",
        number: 1,
        duration: formatDuration("3:03"),
        listened: true,
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
    duration: formatDuration("40:34"),
    photoUrl:
      "https://res.cloudinary.com/dfe3d8qmn/image/upload/v1720028494/releases/zzo54ywhfv21v9phviay.png",
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "Backseat",
        number: 1,
        duration: formatDuration("3:58"),
        listened: true,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Carly Rae Jepsen"),
            artistName: "Carly Rae Jepsen",
          },
        ],
      },
      {
        _id: new Types.ObjectId(),
        name: "Out Of My Head",
        number: 2,
        duration: formatDuration("3:56"),
        listened: true,
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
      {
        _id: new Types.ObjectId(),
        name: "Lucky",
        number: 3,
        duration: formatDuration("3:36"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Tears",
        number: 4,
        duration: formatDuration("4:14"),
        listened: true,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Caroline Polachek"),
            artistName: "Caroline Polachek",
          },
        ],
      },
      {
        _id: new Types.ObjectId(),
        name: "I Got It",
        number: 5,
        duration: formatDuration("3:52"),
        listened: true,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Brooke Candy"),
            artistName: "Brooke Candy",
          },
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("CupcakKe"),
            artistName: "CupcakKe",
          },
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Pabllo Vittar"),
            artistName: "Pabllo Vittar",
          },
        ],
      },
      {
        _id: new Types.ObjectId(),
        name: "Femmebot",
        number: 6,
        duration: formatDuration("3:38"),
        listened: true,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Dorian Electra"),
            artistName: "Dorian Electra",
          },
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Mykki Blanco"),
            artistName: "Mykki Blanco",
          },
        ],
      },
      {
        _id: new Types.ObjectId(),
        name: "Delicious",
        number: 7,
        duration: formatDuration("4:33"),
        listened: true,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Tommy Cash"),
            artistName: "Tommy Cash",
          },
        ],
      },
      {
        _id: new Types.ObjectId(),
        name: "Unlock It",
        number: 8,
        duration: formatDuration("3:53"),
        listened: true,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Kim Petras"),
            artistName: "Kim Petras",
          },
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Jay Park"),
            artistName: "Jay Park",
          },
        ],
      },
      {
        _id: new Types.ObjectId(),
        name: "Porsche",
        number: 9,
        duration: formatDuration("3:27"),
        listened: true,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("MØ"),
            artistName: "MØ",
          },
        ],
      },
      {
        _id: new Types.ObjectId(),
        name: "Track 10",
        number: 10,
        duration: formatDuration("5:27"),
        listened: true,
      },
    ],
  },
  {
    _id: new Types.ObjectId(),
    name: "CRASH",
    artistId: fetchArtistId("Kehlani"),
    artistName: "Kehlani",
    type: "ALBUM",
    duration: formatDuration("52:07"),
    photoUrl:
      "https://res.cloudinary.com/dfe3d8qmn/image/upload/v1720028600/releases/l3ji1rdalc8azaceu9lj.png",
    releaseDate: "2024-06-21",
    tracks: [
      {
        _id: new Types.ObjectId(),
        name: "GrooveTheory",
        number: 1,
        duration: formatDuration("4:08"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Next 2 U",
        number: 2,
        duration: formatDuration("2:42"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "After Hours",
        number: 3,
        duration: formatDuration("3:22"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "What I Want",
        number: 4,
        duration: formatDuration("3:47"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Crash",
        number: 5,
        duration: formatDuration("2:36"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "8",
        number: 6,
        duration: formatDuration("2:30"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Sucia",
        number: 7,
        duration: formatDuration("4:22"),
        listened: true,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Jill Scott"),
            artistName: "Jill Scott",
          },
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Young Miko"),
            artistName: "Young Miko",
          },
        ],
      },
      {
        _id: new Types.ObjectId(),
        name: "Better Not",
        number: 8,
        duration: formatDuration("2:44"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Tears",
        number: 9,
        duration: formatDuration("3:33"),
        listened: true,
        featuring: [
          {
            _id: new Types.ObjectId(),
            artistId: fetchArtistId("Omah Lay"),
            artistName: "Omah Lay",
          },
        ],
      },
      {
        _id: new Types.ObjectId(),
        name: "Vegas",
        number: 10,
        duration: formatDuration("3:46"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Deep",
        number: 11,
        duration: formatDuration("2:49"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Chapel",
        number: 12,
        duration: formatDuration("3:58"),
        listened: true,
      },
      {
        _id: new Types.ObjectId(),
        name: "Loose My Wife",
        number: 13,
        duration: formatDuration("2:46"),
        listened: true,
      },
    ],
  },
];
