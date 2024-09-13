import { Link, useSearchParams } from "react-router-dom";
import useSearchByParams from "../hooks/useSearchByParams";
import useGenreNames from "../hooks/useGenreNames";
import {
  DEFAULT_PAGE,
  DEFAULT_SORTING,
  GENRES_KEY,
  ITEMS_PER_PAGE,
  MOVIE_LABEL,
  MOVIE_TYPE_KEY,
  movieSortOptions,
  PAGE_KEY,
  SHOW_LABEL,
  SORT_BY_KEY,
  tvSortOptions,
} from "../utils/constants";
import Sorting from "./Sorting";
import Filter from "./Filter";
import ShimmerContainer from "./ShimmerContainer";
import Pagination from "./Pagination";
import TrendingMoviesContainer from "./TrendingMoviesContainer";
import TVShowsContainer from "./TVShowsContainer";
import BackButton from "./BackButton";

const AllItems = ({ type }) => {
  const [searchParams] = useSearchParams();
  let queryParams = "";
  searchParams.forEach((val, key) => {
    if (val !== undefined && val !== null && val.trim() !== "") {
      queryParams += key + "=" + val + "&";
    }
  });
  queryParams = queryParams.substring(0, queryParams?.length - 1);
  const { loading, data: items } = useSearchByParams(type, queryParams);
  const genres = useGenreNames(type);
  const page = searchParams.get(PAGE_KEY) || DEFAULT_PAGE;
  const selectedValue = searchParams.get(SORT_BY_KEY) || DEFAULT_SORTING;
  const totalPages = items?.total_pages;
  const searchedGenres = searchParams.get(GENRES_KEY);

  return (
    <div className="grid md:grid-cols-4  w-[97%] ml-2 md:w-full md:ml-4 md:mr-4 ">
      <div className="md:col-span-1  flex flex-col gap-4 w-[96%]   md:ml-8 mt-4 md:mb-4">
        <div className="  font-bold text-3xl text-left md:text-start my-4">
          <Link to={type === MOVIE_TYPE_KEY ? "../.." : ".."}>
            <BackButton />
          </Link>
        </div>
        <Sorting
          options={type === MOVIE_TYPE_KEY ? movieSortOptions : tvSortOptions}
          selectedValue={selectedValue}
        />
        <Filter genres={genres?.genres} searchedGenres={searchedGenres} />
      </div>

      <div className=" md:col-span-3">
        {loading ? (
          <div className="flex flex-row gap-4 flex-wrap ml-10 mt-4">
            <ShimmerContainer length={ITEMS_PER_PAGE} />
          </div>
        ) : items?.results?.length === 0 ? (
          <div className="md:ml-8 mb-8 text-center text-3xl font-bold">
            {`No ${type === MOVIE_TYPE_KEY ? MOVIE_LABEL : SHOW_LABEL} Found.`}
          </div>
        ) : type === MOVIE_TYPE_KEY ? (
          <TrendingMoviesContainer movies={items?.results} />
        ) : (
          <TVShowsContainer shows={items?.results} />
        )}
        {totalPages > 1 ? (
          <Pagination totalPages={totalPages} currentPage={page} />
        ) : null}
      </div>
    </div>
  );
};

export default AllItems;
