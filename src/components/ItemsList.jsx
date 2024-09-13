import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import TrendingMoviesContainer from "./TrendingMoviesContainer";
import Pagination from "./Pagination";
import { useNavigation } from "react-router-dom";
import BackButton from "./BackButton";
import ShimmerContainer from "./ShimmerContainer";
import {
  MOVIE_TYPE_KEY,
  ITEMS_PER_PAGE,
  PAGE_KEY,
  DEFAULT_PAGE,
  LOADING_STATE,
} from "../utils/constants";
import TVShowsContainer from "./TVShowsContainer";

const ItemsList = ({ label, backLink, type }) => {
  const data = useLoaderData();
  const [searchParams] = useSearchParams();
  const page = searchParams.get(PAGE_KEY) || DEFAULT_PAGE;
  const totalPages = data.total_pages;
  const navigation = useNavigation();
  const loading = navigation.state === LOADING_STATE;
  return (
    <div className="my-6 mx-4 text-center">
      <h2 className="w-[80%] mx-auto flex flex-col gap-4 sm:flex-row md:w-[98%] md:ml-10 mb-4 font-bold text-xl">
        <div className="sm:w-5/12 md:w-6/12 lg:w-5/12">
          <Link className=" sm:w-3/4 md:w-5/12  sm:float-left" to={backLink}>
            <BackButton />
          </Link>
        </div>
        <span className="text-3xl sm:text-4xl float-left ">{label}</span>
      </h2>
      {loading ? (
        <div className="flex flex-row justify-center sm:justify-around lg:justify-start items-start gap-4 flex-wrap sm:m-5 sm:ml-10 ">
          <ShimmerContainer length={ITEMS_PER_PAGE} />
        </div>
      ) : type === MOVIE_TYPE_KEY ? (
        <TrendingMoviesContainer movies={data.results} />
      ) : (
        <TVShowsContainer shows={data.results} />
      )}
      {!loading && <Pagination totalPages={totalPages} currentPage={page} />}
    </div>
  );
};

export default ItemsList;
