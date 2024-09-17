import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./bento-grid";

type Song = {
  artist: string;
  cover: string;
  title: string;
  fileUrl: string;
  duration: number;
  playlistId: string;
};

const HeaderImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    width={1440}
    height={1440}
    src={src}
    alt={alt}
    className="object-contain w-full h-full rounded-t-xl hover:brightness-75 transition ease-in-out duration-200 hover:filter hover:blur-sm transform"
  />
);

export default function SongsGrid({ songs }: { songs: Song[] }) {
  // transform the duration seconds to minutes and seconds format
  // e.g. 190 seconds to 3:10

  const transformDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <BentoGrid>
      {songs.map((song, i) => (
        <BentoGridItem
          key={song.fileUrl}
          title={song.title}
          description={transformDuration(song.duration)}
          header={<HeaderImage src={song.cover} alt={song.title} />}
          className={i === 3 || i === 6 ? "md:col-span-1" : ""}
          audio={song.fileUrl}
          cover={song.cover}
        />
      ))}
    </BentoGrid>
  );
}
