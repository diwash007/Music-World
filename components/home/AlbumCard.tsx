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
      className="group w-80 hover:shadow-xl overflow-hidden"
    >
      <div className="overflow-hidden">
        <img
          src={album.cover_art_thumbnail_url}
          className="w-full group-hover:scale-150 transition-transform duration-[5000ms] ease-in-out"
        />
      </div>
      <p className="p-2">{album.artist.name}</p>
    </Link>
  );
}

export default AlbumCard;
