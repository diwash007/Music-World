import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

function AlbumHero({ album, handlePlay, isPlaying }) {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-5 mb-10">
      <Image
        src={album.cover_art_thumbnail_url}
        alt={album.name}
        width={300}
        height={300}
        className="block rounded-md"
      />
      <div className="space-y-1">
        <p className="text-2xl font-bold">{album.name}</p>
        <p className="text-xl font-semibold text-gray-700">
          {album.artist.name}
        </p>
        <p className="text-gray-500 text-sm">
          {album.release_date_for_display}
        </p>
        <div className="pt-3 flex items-center gap-4">
          <button
            className="bg-primary rounded-full px-10 py-2 text-white font-bold hover:bg-secondary"
            onClick={handlePlay}
          >
            {isPlaying ? "Pause" : "Play All"}
          </button>
          <FaHeart
            size={30}
            className="cursor-pointer text-primary/50 hover:text-red-500"
          />
          <HiDotsVertical size={20} />
        </div>
      </div>
    </div>
  );
}

export default AlbumHero;
