import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Container from "./components/Container";
import MainContent, {
  loader as MainContentLoader,
} from "./components/MainContent";
import TrendingMovies, {
  loader as TrendingMovieLoader,
} from "./components/TrendingMovies";

import PopularMovies, {
  loader as PopularMovieLoader,
} from "./components/PopularMovies";
import TopRatedMovies, {
  loader as TopRatedMoviesLoader,
} from "./components/TopRatedMovies";
import UpcomingMovies, {
  loader as UpcomingMoviesLoader,
} from "./components/UpcomingMovies";
import MovieDetail, {
  loader as MovieDetailLoader,
} from "./components/MovieDetail";
import AllMovies, { loader as AllMovieLoader } from "./components/AllMovies";
import Reviews, { loader as MovieReviewLoader } from "./components/Reviews";
import SearchResults, {
  loader as SearchResultsLoader,
} from "./components/SearchResults";
import TVShows, { loader as TVShowsLoader } from "./components/TVShows";
import TopRatedTVShows, {
  loader as TopRatedTVShowsLoader,
} from "./components/TopRatedTVShows";
import PopularTVShows, {
  loader as PopularTVShowsLoader,
} from "./components/PopularTVShows";
import TVShowDetail, {
  loader as TVShowDetailLoader,
} from "./components/TVShowDetail";
import AllTVShows, {
  loader as AllTVShowsLoader,
} from "./components/AllTVShows";
import PersonDetail, {
  loader as PersonDetailLoader,
} from "./components/PersonDetail";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <MainContent />,
        loader: MainContentLoader,
      },
      {
        path: "search",
        element: <SearchResults />,
        loader: SearchResultsLoader,
      },
      {
        path: "/movies",
        children: [
          {
            path: "trending",
            element: <TrendingMovies />,
            loader: TrendingMovieLoader,
          },
          {
            path: "top-rated",
            element: <TopRatedMovies />,
            loader: TopRatedMoviesLoader,
          },
          {
            path: "upcoming",
            element: <UpcomingMovies />,
            loader: UpcomingMoviesLoader,
          },
          {
            path: "popular",
            element: <PopularMovies />,
            loader: PopularMovieLoader,
          },
          {
            path: ":movieId",

            children: [
              {
                path: "",
                element: <MovieDetail />,
                loader: MovieDetailLoader,
              },
              {
                path: "reviews",
                element: <Reviews />,
                loader: MovieReviewLoader,
              },
            ],
          },
          {
            path: "all",
            element: <AllMovies />,
            loader: AllMovieLoader,
          },
        ],
      },

      {
        path: "/tv",
        children: [
          {
            path: "",
            element: <TVShows />,
            loader: TVShowsLoader,
          },
          {
            path: "top-rated",
            element: <TopRatedTVShows />,
            loader: TopRatedTVShowsLoader,
          },

          {
            path: "popular",
            element: <PopularTVShows />,
            loader: PopularTVShowsLoader,
          },
          {
            path: ":showId",

            children: [
              {
                path: "",
                element: <TVShowDetail />,
                loader: TVShowDetailLoader,
              },
              {
                path: "reviews",
                element: <Reviews />,
                loader: MovieReviewLoader,
              },
            ],
          },
          {
            path: "all",
            element: <AllTVShows />,
            loader: AllTVShowsLoader,
          },
        ],
      },
      {
        path: "person/:personID",
        element: <PersonDetail />,
        loader: PersonDetailLoader,
      },
    ],
    errorElement: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
