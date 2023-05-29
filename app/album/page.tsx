"use client";

import { getAlbumDetails, getSongs } from "@/helpers/fetch";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../loading";

export default function Album() {
  const [songs, setSongs]: any[] = useState([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    isLoading,
    isError,
    data: album,
  } = useQuery({
    queryKey: [id],
    queryFn: () => getAlbumDetails(id),
  });

  useEffect(() => {
    const fetchSongs = async () => setSongs(await getSongs(id));
    fetchSongs();
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="py-5">
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-5 mb-10">
        <img src={album.cover_art_thumbnail_url} className="block"/>
        <div className="space-y-1">
          <p className="text-2xl font-bold">{album.name}</p>
          <p className="text-xl font-semibold text-gray-700">{album.artist.name}</p>
          <p className="text-gray-500 text-sm">{album.release_date_for_display}</p>
        </div>
      </div>
      <p className="text-xl font-bold">Tracks</p>
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Artists
            </th>
          </tr>
        </thead>
        <tbody>
          {songs!.map((song: any, index: any) => {
            return (
              <tr className="bg-white border-b  " key={song.id}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{song.title}</td>
                <td className="px-6 py-4">{song.artist_names}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
