import React from "react";
import AlbumCard from "./AlbumCard";

function Albums({ albums, title }) {
  return (
    <div>
      <p className="text-2xl font-semibold px-2 py-5">{title}</p>
      <div className="flex gap-10 flex-wrap justify-center items-center">
        {albums.length > 0 ? (
          albums.map((album) => {
            return <AlbumCard album={album} key={album.id} />;
          })
        ) : (
          <p>No albums to display.</p>
        )}
      </div>
    </div>
  );
}

export default Albums;
