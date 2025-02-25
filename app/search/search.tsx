"use client";
import Albums from "@/components/shared/Albums";
import { searchAlbums } from "@/helpers/fetch";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { addAsync } from "../redux/albumsSlice";
import { useDispatch } from "react-redux";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [searchQuery, setSearchQuery] = useState(query);
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    query && getAlbums();
  }, [query]);

  const getAlbums = async () => {
    setIsLoading(true);
    const data = await searchAlbums(searchQuery!);
    setAlbums(data);
    dispatch(addAsync(data));
    setIsLoading(false);
  };

  return (
    <div>
      <form className="mb-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary"
            placeholder="Search Albums, Artists..."
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
          <Link
            href={{
              pathname: "/search",
              query: {
                query: searchQuery,
              },
            }}
          >
            <button className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring- font-medium rounded-lg text-sm px-4 py-2">
              Search
            </button>
          </Link>
        </div>
      </form>
      {isLoading ? (
        <Loading />
      ) : (
        <Albums albums={albums} title="Search result" />
      )}
    </div>
  );
}
