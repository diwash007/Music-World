"use client";

import { getTrendingAlbums } from "@/helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export function Trending({ albums }: { albums: any[] }) {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data } = useQuery({
    queryKey: [page],
    queryFn: () => getTrendingAlbums(page),
    initialData: albums,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      {data.map((data_item: any) => {
        const album = data_item.item;
        return (
          <Link
            key={album.id}
            href={{
              pathname: "/album",
              query: {
                id: album.id,
              },
            }}
          >
            <div>
              <img src={album.cover_art_thumbnail_url} />
              <h1>{album.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
