import { formatDate } from "../utils/formatFunctions";
import Image from "./Image";
import { Link } from "react-router-dom";
import { MOVIE_TYPE_KEY } from "../utils/constants";

const SearchResultMovie = ({ item }) => {
  return (
    <Link to={`/movies/${item?.id}`}>
      <div className="flex flex-col sm:flex-row gap-4 m-4 border-slate-400 border rounded-xl  items-center">
        <div className="w-full sm:w-1/3 flex-shrink-0  h-64 lg:h-56 lg:w-3/12 rounded-tr-xl sm:rounded-tr-none rounded-tl-xl sm:rounded-bl-xl bg-gray-100 border-r-slate-400 border-r">
          <Image
            type={MOVIE_TYPE_KEY}
            path={item?.poster_path}
            className=" w-full h-full object-fill rounded-tr-xl sm:rounded-tr-none rounded-tl-xl sm:rounded-bl-xl "
            alt={`image of ${item?.title}`}
          />
        </div>
        <div className="">
          <div className="text-center sm:!text-left text-3xl font-bold">
            {item?.title}
          </div>
          <div className="text-center sm:!text-left italic mt-2">
            {formatDate(item?.release_date)}
          </div>

          <div className="p-2 sm:pl-0 sm:pr-2 pb-1  line-clamp-5 sm:line-clamp-3 overflow-hidden">
            {item?.overview}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultMovie;
