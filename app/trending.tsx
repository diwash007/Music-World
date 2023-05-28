"use client";

import { getTrendingAlbums } from "@/helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function Trending({ albums }: { albums: any[] }) {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data } = useQuery({
    queryKey: [page],
    queryFn: () => getTrendingAlbums(page),
    initialData: albums,
  });

  return (
    <div>
      {data.map((data_item: any) => {
        const album = data_item.item;
        return (
          <div key={album.id}>
            <img src={album.cover_art_thumbnail_url} />
            <h1>{album.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
