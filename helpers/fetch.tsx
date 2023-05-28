import axios from "axios";

export async function getTrendingAlbums(page: number) {
  const options = {
    method: "GET",
    url: "https://genius-song-lyrics1.p.rapidapi.com/chart/albums/",
    params: {
      per_page: "10",
      page: page.toString(),
    },
    headers: {
      "X-RapidAPI-Key": "b968fc9238msh7581387d645d6bbp1ef58djsne0f011423bfa",
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = await response.data;
    return data.chart_items;
  } catch (err) {
    console.log(err);
    return [];
  }
}
