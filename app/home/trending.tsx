"use client";

import { getTrendingAlbums } from "@/helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loading from "../loading";
import Albums from "@/components/shared/Albums";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingAsync } from "../redux/albumsSlice";
import { RootState } from "../redux/store";

export function Trending() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const albums = useSelector((state: RootState) => state.albums.trending);

  const { isError, data } = useQuery({
    queryKey: [page],
    queryFn: () => getTrendingAlbums(page),
    initialData: albums,
    keepPreviousData: true,
  });

  dispatch(addTrendingAsync(data));

  if (data.length < 1) return <Loading />;
  if (isError) return <p>Something went wrong</p>;

  return <Albums albums={data} title="Trending Albums 🔥" />;
}
