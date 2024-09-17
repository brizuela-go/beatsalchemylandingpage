import { Metadata } from "next";
import BeatsHero from "../../components/beats-hero";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import db from "../../lib/client";
import SongsGrid from "../../components/songs";

export const metadata: Metadata = {
  title: "Our Beats",
  description: "Listen to our selection of binaural beats",
};

type Song = {
  artist: string;
  cover: string;
  title: string;
  fileUrl: string;
  duration: number;
  playlistId: string;
};

type Playlist = {
  id: string;
  title: string;
  description: string;
  songs: string[]; // Array of song IDs
};

export default async function Beats() {
  const songsCollectionRef = collection(db, "songs");
  const playlistCollectionRef = collection(db, "playlists");

  let playlistsToShow: Playlist[] = [];

  // Fetch playlists
  const playlistsSnapshot = await getDocs(playlistCollectionRef);
  playlistsSnapshot.forEach((playlistDoc) => {
    const playlistData = playlistDoc.data() as Playlist;
    playlistsToShow.push({
      ...playlistData,
      id: playlistDoc.id,
    });
  });

  // Fetch songs for each playlist based on song IDs
  const playlistsWithSongs = await Promise.all(
    playlistsToShow.map(async (playlist) => {
      const songsToShow: Song[] = [];

      // Loop through the song IDs and fetch each song
      await Promise.all(
        playlist.songs.map(async (songId) => {
          const songDocRef = doc(songsCollectionRef, songId);
          const songDoc = await getDoc(songDocRef);
          if (songDoc.exists()) {
            const songData = songDoc.data() as Song;
            songsToShow.push({
              ...songData,
              playlistId: playlist.id, // Associate song with the playlist
            });
          }
        })
      );

      return { ...playlist, songs: songsToShow }; // Return playlist with its corresponding songs
    })
  );

  return (
    <section className="flex flex-col lg:py-2">
      <BeatsHero />
      {playlistsWithSongs.map((playlist) => (
        <div key={playlist.id} className="rounded-md my-5">
          <h2 className="text-5xl text-center font-semibold  my-4">
            {playlist.title}
          </h2>
          <p
            className="text-center text-lg text-gray-600 my-4
          "
          >
            {playlist.description}
          </p>
          <SongsGrid songs={playlist.songs} />
        </div>
      ))}
    </section>
  );
}
