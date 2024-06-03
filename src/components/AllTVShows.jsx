import {
  Link,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { fetchGenreNames, fetchUsingParams } from "../apis/fetchMovies";

import LoaderFullScreen from "./LoaderFullScreen";
import { IoMdArrowRoundBack } from "react-icons/io";
import TVShowsContainer from "./TVShowsContainer";
import Pagination from "./Pagination";
import Sorting from "./Sorting";
import Filter from "./Filter";

let tvSortOptions = [
  { id: "first_air_date.asc", label: "Air Date Ascending" },
  { id: "first_air_date.desc", label: "Air Date Descending" },
  { id: "name.asc", label: "Name Ascending" },
  { id: "name.desc", label: "Name Descending" },
  { id: "popularity.asc", label: "Popularity Ascending" },
  { id: "popularity.desc", label: "Popularity Descending" },
  { id: "vote_average.asc", label: "Vote Average Ascending" },
  { id: "vote_average.desc", label: "Vote Average Descending" },
];

function AllTVShows() {
  const data = useLoaderData();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const totalPages = data.shows.total_pages;
  const navigation = useNavigation();

  const selectedValue = searchParams.get("sort_by") || "popularity.desc";

  const { genres } = data;
  const searchedGenres = searchParams.get("genres");

  if (navigation.state === "loading") {
    return <LoaderFullScreen />;
  }

  return (
    <div className="grid md:grid-cols-4  w-[96%] sm:w-[98%]  ml-3 md:w-[98.6%] md:ml-4 md:mr-4 ">
      <div className="md:col-span-1  flex flex-col gap-4 w-[96%]   md:ml-8 mt-4 md:mb-4">
        <Sorting options={tvSortOptions} selectedValue={selectedValue} />
        <Filter genres={genres.genres} searchedGenres={searchedGenres} />
      </div>
      <div className="md:col-span-3">
        <div className=" font-bold text-3xl text-center md:text-start mt-5 mb-5 md:m-5">
          <Link
            className="md:ml-8 text-center text-white bg-purple-400 pt-0.5 pb-0.5 pl-3 pr-3 rounded-xl"
            to="/tv"
          >
            <IoMdArrowRoundBack className=" align-middle inline-block w-8 h-8" />{" "}
            Go Back
          </Link>{" "}
        </div>

        {data.shows.results.length === 0 ? (
          <div className="md:ml-8 mb-8 text-center text-3xl font-bold">
            No TV Show Found.
          </div>
        ) : (
          <TVShowsContainer shows={data.shows.results} />
        )}
        {totalPages > 1 ? (
          <Pagination totalPages={totalPages} currentPage={page} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AllTVShows;

export async function loader({ request }) {
  let search = new URLSearchParams(request.url.split("?")[1]);
  let queryParams = "";
  search.forEach((val, key) => {
    if (val !== undefined && val !== null && val.trim() !== "") {
      queryParams += key + "=" + val + "&";
    }
  });
  queryParams = queryParams.substring(0, queryParams.length - 1);

  let result = {};
  result["shows"] = await fetchUsingParams("tv", queryParams);
  result["genres"] = await fetchGenreNames("tv");

  return result;
}
