import { useLoaderData } from "react-router-dom";
import { fetchByCategory } from "../apis/fetchMovies";
import TVShowContainer from "./TVShowContainer";

function TVShows() {
  const data = useLoaderData();
  return (
    <>
      <TVShowContainer
        shows={data.top_rated.results}
        name="Top Rated"
        path="top-rated"
      />
      <TVShowContainer
        shows={data.popular.results}
        name="Popular"
        path="popular"
      />
    </>
  );
}

export default TVShows;

export async function loader() {
  let res = {};
  res["top_rated"] = await fetchByCategory("tv", "top_rated");
  res["popular"] = await fetchByCategory("tv", "popular");

  return res;
}
