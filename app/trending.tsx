"use client";

import AlbumCard from "@/components/home/AlbumCard";
import { getTrendingAlbums } from "@/helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "./loading";

export function Trending({ albums }: { albums: any[] }) {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data } = useQuery({
    queryKey: [page],
    queryFn: () => getTrendingAlbums(page),
    initialData: albums,
    keepPreviousData: true,
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="px-10 py-5">
      <p className="text-2xl font-semibold p-2">Trending Albums</p>
      <div className="flex gap-10 flex-wrap justify-center items-center">
        {data.map((data_item: any) => {
          const album = data_item.item;
          return <AlbumCard album={album} key={album.id} />;
        })}
      </div>
    </div>
  );
}
