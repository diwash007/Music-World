import Link from "next/link";
import React from "react";

function AlbumCard({ album }: { album: any }) {
  return (
    <Link
      href={{
        pathname: "/album",
        query: {
          id: album.id,
        },
      }}
      className="group w-60 hover:shadow-xl overflow-hidden"
    >
      <div className="overflow-hidden">
        <img
          src={album.cover_art_thumbnail_url}
          className="w-full h-60 group-hover:scale-150 transition-transform duration-[5000ms] ease-in-out"
        />
      </div>
      <p className="px-2 line-clamp-1">{album.artist.name}</p>
    </Link>
  );
}

export default AlbumCard;
