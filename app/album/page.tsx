"use client";

import { getAlbumDetails } from "@/helpers/fetch";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Album() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { isLoading, isError, data } = useQuery({
    queryKey: [id],
    queryFn: () => getAlbumDetails(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return <div>{data.full_title}</div>;
}
