"use client";

import { getAlbumDetails, getSongs } from "@/helpers/fetch";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import Loading from "../loading";
import { FaHeart } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlayCircle } from "react-icons/fa";
import Player from "./Player";

export default function Album() {
  const [songs, setSongs]: any[] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const audioRef = useRef(typeof Audio !== "undefined" && new Audio());

  useEffect(() => {
    audioRef.current = new Audio("/song.mp3");
  }, []);

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

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
    if (!audioRef.current.paused) audioRef.current.pause();
    else audioRef.current.play();
  };

  return (
    <div className="py-5">
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-5 mb-10">
        <img src={album.cover_art_thumbnail_url} className="block rounded-md" />
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
              Play All
            </button>
            <FaHeart
              size={30}
              className="cursor-pointer text-primary/50 hover:text-red-500"
            />
            <HiDotsVertical size={20} />
          </div>
        </div>
      </div>
      <p className="text-xl font-bold">Tracks</p>
      <table className="w-full text-sm text-left text-gray-500 mb-16">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3 hidden md:table-cell">
              #
            </th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Artists
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {songs!.map((song: any, index: any) => {
            return (
              <tr className="bg-white border-b  " key={song.id}>
                <td className="px-6 py-4 hidden md:table-cell">{index + 1}</td>
                <td className="px-6 py-4">
                  <img
                    src={song.song_art_image_thumbnail_url}
                    className="w-16"
                  ></img>
                </td>
                <td className="px-6 py-4">{song.title}</td>
                <td className="px-6 py-4">{song.artist_names}</td>
                <td className="px-6 py-4">
                  <FaPlayCircle
                    size={30}
                    className="text-primary cursor-pointer hover:text-secondary"
                    onClick={handlePlay}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Player isPlaying={isPlaying} handlePlay={handlePlay} />
    </div>
  );
}
