import { Link } from "react-router-dom";
import ShimmerContainer from "./ShimmerContainer";
import {
  MOVIE_SHIMMER_CONTAINER_LENGTH,
  MOVIE_TYPE_KEY,
} from "../utils/constants";
import TrendingCard from "./TrendingCard";
import TVShowCard from "./TVShowCard";
import { useFetchByCategory } from "../hooks/useFetchByCategory";

const List = ({ title, category, type, linkTo }) => {
  const { results: data } = useFetchByCategory(category, type);
  return (
    <div className="mt-4 mb-4 ml-8 mr-8 overflow-x-auto">
      <div className="text-2xl p-2 font-bold justify-between sm:justify-normal flex items-center gap-4 ">
        <span>{title}</span>
        <Link
          className=" bg-amber-600 text-white pl-3 pr-3 pt-1 pb-1 rounded-md text-lg"
          to={linkTo}
        >
          Explore
        </Link>
      </div>
      <div className="custom-scrollbar pb-1 flex flex-no-wrap overflow-x-auto">
        {data.length === 0 ? (
          <ShimmerContainer length={MOVIE_SHIMMER_CONTAINER_LENGTH} />
        ) : category === MOVIE_TYPE_KEY ? (
          data.map((movie) => <TrendingCard key={movie.id} movie={movie} />)
        ) : (
          data.map((show) => <TVShowCard key={show.id} show={show} />)
        )}
      </div>
    </div>
  );
};

export default List;
