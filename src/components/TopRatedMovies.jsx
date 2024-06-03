import { fetchByCategory } from "../apis/fetchMovies";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import TrendingMoviesContainer from "./TrendingMoviesContainer";
import Pagination from "./Pagination";
import { useNavigation } from "react-router-dom";
import LoaderFullScreen from "./LoaderFullScreen";
import { IoMdArrowRoundBack } from "react-icons/io";

function TopRatedMovies() {
  const data = useLoaderData();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const totalPages = data.total_pages;
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <LoaderFullScreen />;
  }

  return (
    <div>
      <h2 className="flex flex-col gap-4 md:block text-center font-bold text-3xl m-5">
        <div>
          <Link
            className="md:ml-8 md:float-left text-white bg-purple-400 pt-0.5 pb-0.5 pl-3 pr-3 rounded-xl"
            to="/"
          >
            <IoMdArrowRoundBack className=" align-middle inline-block w-8 h-8" />{" "}
            Go Back
          </Link>
        </div>{" "}
        <span>Top Rated Movies</span>
      </h2>
      <TrendingMoviesContainer movies={data.results} />
      <Pagination totalPages={totalPages} currentPage={page} />
    </div>
  );
}

export default TopRatedMovies;

export async function loader({ request }) {
  let search = new URLSearchParams(request.url.split("?")[1]);
  const page = search.get("page") || 1;
  return await fetchByCategory("movie", "top_rated", page);
}
