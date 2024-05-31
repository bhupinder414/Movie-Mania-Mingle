import { Link } from "react-router-dom";
import TVShowCard from "./TVShowCard";

function TVShowContainer({ shows, name, path }) {
  return (
    <div className="mt-8 ml-8 mr-8 overflow-x-auto">
      <div className="text-2xl p-2 font-bold flex items-center gap-4 ">
        <span>{name}</span>
        <Link
          className=" bg-amber-600 text-white pl-3 pr-3 pt-1 pb-1 rounded-md text-lg"
          to={`/tv/${path}`}
        >
          Explore
        </Link>
      </div>
      <div className=" flex flex-no-wrap overflow-x-auto">
        {shows.map((show) => (
          <TVShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}

export default TVShowContainer;
