import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import { getSongs } from "@/helpers/fetch";

function TrackList({ id, handlePlay }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => setSongs(await getSongs(id));
    fetchSongs();
  }, []);

  return (
    <>
      <p className="text-xl font-bold">Tracks</p>
      <table className="w-full text-sm text-left text-gray-500 mb-16">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3 hidden md:table-cell">
              #
            </th>
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
          {songs!.map((song, index) => {
            return (
              <tr
                className="bg-white border-b hover:bg-primary/25"
                key={song.id}
              >
                <td className="px-6 py-4 hidden md:table-cell">{index + 1}</td>
                <td className="px-6 py-4 items-center flex gap-2">
                  <Image
                    src={song.song_art_image_thumbnail_url}
                    alt={song.title}
                    width={50}
                    height={50}
                  ></Image>
                  {song.title}
                </td>
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
    </>
  );
}

export default TrackList;
