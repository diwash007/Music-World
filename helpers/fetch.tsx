import axios from "axios";

export async function getTrendingAlbums(page: number) {
  const options = {
    method: "GET",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/chart/albums/",
    params: {
      per_page: "10",
      page: page.toString(),
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    let data = await response.data;
    let albums = [];
    data.chart_items.forEach((album) => {
      albums.push(album.item);
    });
    return albums;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getAlbumDetails(id: string | null) {
  const options = {
    method: "GET",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/album/details/",
    params: { id: id?.toString() },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    return data.album;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function getSongs(id: string | null) {
  const options = {
    method: "GET",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/album/appearances/",
    params: { id: id?.toString(), per_page: "20", page: "1" },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    let songs = [];
    data.album_appearances.forEach((item) => songs.push(item.song));
    return songs;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function searchAlbums(query: string) {
  const options = {
    method: "GET",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/search/multi/",
    params: {
      q: query,
      per_page: "5",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    let data = await response.data;
    data = data.sections.filter((item) => item.type === "album");
    let albums = [];
    data[0].hits.forEach((hit) => {
      albums.push(hit.result);
    });
    return albums;
  } catch (err) {
    console.log(err);
    return [];
  }
}
