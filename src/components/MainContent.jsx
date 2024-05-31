import MovieContainer from "./MovieContainer";
import { fetchByCategory } from "../apis/fetchMovies";
import { useLoaderData } from "react-router-dom";

function MainContent() {
  const { trending_movies, popular_movies, top_rated_movies, upcoming_movies } =
    useLoaderData();
  return (
    <>
      <MovieContainer
        title="Trending Now"
        linkTo="/movies/trending"
        movies={trending_movies.results}
      />
      <MovieContainer
        title="Popular"
        linkTo="/movies/popular"
        movies={popular_movies.results}
      />
      <MovieContainer
        title="Top Rated"
        linkTo="/movies/top-rated"
        movies={top_rated_movies.results}
      />
      <MovieContainer
        title="Upcoming"
        linkTo="/movies/upcoming"
        movies={upcoming_movies.results}
      />
    </>
  );
}

export default MainContent;

export async function loader() {
  let result = {};
  result["trending_movies"] = await fetchByCategory("movie", "now_playing", 1);
  result["popular_movies"] = await fetchByCategory("movie", "popular", 1);
  result["top_rated_movies"] = await fetchByCategory("movie", "top_rated", 1);
  result["upcoming_movies"] = await fetchByCategory("movie", "upcoming", 1);

  return result;
}
