"use client";

import { getAlbumDetails } from "@/helpers/fetch";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Player from "./Player";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading";
import AlbumHero from "./AlbumHero";
import TrackList from "./TrackList";

export default function Album() {
  const [isPlaying, setIsPlaying] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const audioRef = useRef(typeof Audio !== "undefined" && new Audio());

  const albums = useSelector((state: RootState) => state.albums.all);

  let album = albums.find((a) => a.id.toString() === id);

  if (!album) {
    const { data } = useQuery({
      queryKey: ["album"],
      queryFn: () => getAlbumDetails(id),
    });
    album = data;
  }

  useEffect(() => {
    audioRef.current = new Audio("/song.mp3");
    return () => audioRef.current.pause();
  }, []);

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
    if (!audioRef.current.paused) audioRef.current.pause();
    else audioRef.current.play();
  };

  if (!album) {
    return <Loading />;
  }

  return (
    <div className="py-5">
      {album && (
        <AlbumHero
          album={album}
          handlePlay={handlePlay}
          isPlaying={isPlaying}
        />
      )}
      <TrackList id={id} handlePlay={handlePlay} />
      <Player isPlaying={isPlaying} handlePlay={handlePlay} />
    </div>
  );
}
