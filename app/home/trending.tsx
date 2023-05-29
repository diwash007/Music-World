"use client";

import { getTrendingAlbums } from "@/helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loading from "../loading";
import Albums from "@/components/shared/Albums";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingAsync } from "../slices/albumsSlice";
import { RootState } from "../store";

export function Trending() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const albums = useSelector((state: RootState) => state.albums.trending);

  const { isLoading, isError, data } = useQuery({
    queryKey: [page],
    queryFn: () => getTrendingAlbums(page),
    initialData: [],
    keepPreviousData: true,
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Something went wrong</p>;

  useEffect(() => {
    dispatch(addTrendingAsync(data));
  }, [data]);

  return <Albums albums={albums} title="Trending Albums 🔥" />;
}
