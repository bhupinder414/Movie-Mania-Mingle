import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/Container";
import MainContent from "./components/MainContent";
import { loader } from "./utils/loaders";
import Reviews from "./components/Reviews";
import SearchResults from "./components/SearchResults";
import TVShows from "./components/TVShows";
import PersonDetail from "./components/PersonDetail";
import NotFound from "./components/NotFound";
import ItemsList from "./components/ItemsList";
import SeasonContainer from "./components/SeasonContainer";
import SeasonDetail from "./components/SeasonDetail";
import ShowAllVideos from "./components/ShowAllVideos";
import ModalContextProvider from "./context/ModalContext";
import ItemDetail from "./components/ItemDetail";
import {
  MOVIE_TYPE_KEY,
  POPULAR_KEY,
  SHOW_TYPE_KEY,
  TOP_RATED_KEY,
  TRENDING_KEY,
  UPCOMING_KEY,
} from "./utils/constants";
import AllItems from "./components/AllItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
      {
        path: "/movies",
        children: [
          {
            path: "trending",
            element: (
              <ItemsList
                label="Trending Movies"
                backLink="/"
                type={MOVIE_TYPE_KEY}
              />
            ),
            loader: loader(MOVIE_TYPE_KEY, TRENDING_KEY),
          },
          {
            path: "top-rated",
            element: (
              <ItemsList
                label="Top Rated Movies"
                backLink="/"
                type={MOVIE_TYPE_KEY}
              />
            ),
            loader: loader(MOVIE_TYPE_KEY, TOP_RATED_KEY),
          },
          {
            path: "upcoming",
            element: (
              <ItemsList
                label="Upcoming Movies"
                backLink="/"
                type={MOVIE_TYPE_KEY}
              />
            ),
            loader: loader(MOVIE_TYPE_KEY, UPCOMING_KEY),
          },
          {
            path: "popular",
            element: (
              <ItemsList
                label="Popular Movies"
                backLink="/"
                type={MOVIE_TYPE_KEY}
              />
            ),
            loader: loader(MOVIE_TYPE_KEY, POPULAR_KEY),
          },
          {
            path: ":movieId",

            children: [
              {
                path: "",
                element: <ItemDetail type={MOVIE_TYPE_KEY} id="movieId" />,
              },
              {
                path: "reviews",
                element: <Reviews type={MOVIE_TYPE_KEY} id="movieId" />,
              },
              {
                path: "videos",
                element: <ShowAllVideos />,
              },
            ],
          },
          {
            path: "all",
            element: <AllItems type={MOVIE_TYPE_KEY} />,
          },
        ],
      },

      {
        path: "/tv",
        children: [
          {
            path: "",
            element: <TVShows />,
          },
          {
            path: "top-rated",
            element: (
              <ItemsList
                label="Top Rated TV Shows"
                backLink={`/${SHOW_TYPE_KEY}`}
                type={SHOW_TYPE_KEY}
              />
            ),
            loader: loader(SHOW_TYPE_KEY, TOP_RATED_KEY),
          },

          {
            path: "popular",
            element: (
              <ItemsList
                label="Popular TV Shows"
                backLink={`/${SHOW_TYPE_KEY}`}
                type={SHOW_TYPE_KEY}
              />
            ),
            loader: loader(SHOW_TYPE_KEY, POPULAR_KEY),
          },
          {
            path: ":showId",

            children: [
              {
                path: "",
                element: <ItemDetail type={SHOW_TYPE_KEY} id="showId" />,
              },
              {
                path: "reviews",
                element: <Reviews type={SHOW_TYPE_KEY} id="showId" />,
              },
              {
                path: "videos",
                element: <ShowAllVideos />,
              },
              {
                path: "seasons",
                children: [
                  {
                    path: "",
                    element: <SeasonContainer />,
                  },
                  {
                    path: ":seasonNumber",
                    element: <SeasonDetail />,
                  },
                ],
              },
            ],
          },
          {
            path: "all",
            element: <AllItems type={SHOW_TYPE_KEY} />,
          },
        ],
      },
      {
        path: "person/:personID",
        element: <PersonDetail />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

const App = () => {
  return (
    <ModalContextProvider>
      <RouterProvider router={router} />
    </ModalContextProvider>
  );
};

export default App;
