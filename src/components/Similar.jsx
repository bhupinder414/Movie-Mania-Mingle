import { Link, useParams } from "react-router-dom";
import useSimilar from "../hooks/useSimilar";
import TrendingCard from "./TrendingCard";
import ShimmerContainer from "./ShimmerContainer";
import { MOVIE_SHIMMER_CONTAINER_LENGTH } from "../utils/constants";

const Similar = ({ linkTo, type, id, label }) => {
  const { [id]: dynamicId } = useParams();
  const { results: similar_movies_data } = useSimilar(type, dynamicId);

  return (
    <>
      {similar_movies_data?.length != 0 && (
        <div className="ml-10 mt-4 text-4xl mr-10 sm:mr-0 font-bold flex flex-col sm:flex-row gap-4">
          <h1 className=" text-center sm:text-left">{label}</h1>
          <Link
            className="bg-purple-400 text-white text-center p-1 pl-2 pr-2  rounded-lg"
            to={linkTo}
          >
            Explore
          </Link>
        </div>
      )}
      <div className=" flex flex-no-wrap overflow-x-auto  m-8 mt-2 custom-scrollbar pb-1">
        {similar_movies_data === null ? (
          <ShimmerContainer length={MOVIE_SHIMMER_CONTAINER_LENGTH} />
        ) : (
          similar_movies_data.map((movie) => (
            <TrendingCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </>
  );
};

export default Similar;
