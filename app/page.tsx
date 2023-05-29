import { getTrendingAlbums } from "@/helpers/fetch";
import { Trending } from "./home/trending";

export default async function Home() {
  const albums = await getTrendingAlbums(1);
  return <Trending albums={albums} />;
}
