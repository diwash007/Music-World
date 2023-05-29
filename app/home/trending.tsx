"use client";

import { getTrendingAlbums } from "@/helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../loading";
import Albums from "@/components/shared/Albums";

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

  return <Albums albums={data} title="Trending Albums" />;
}
