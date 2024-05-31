import TrendingCard from "./TrendingCard";
import { Link } from "react-router-dom";

function MovieContainer({ title, linkTo, movies }) {
  return (
    <div className="mt-8 ml-8 mr-8 overflow-x-auto">
      <div className="text-2xl p-2 font-bold flex items-center gap-4 ">
        <span>{title}</span>
        <Link
          className=" bg-amber-600 text-white pl-3 pr-3 pt-1 pb-1 rounded-md text-lg"
          to={linkTo}
        >
          Explore
        </Link>
      </div>
      <div className=" flex flex-no-wrap overflow-x-auto">
        {movies.map((movie) => (
          <TrendingCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieContainer;
