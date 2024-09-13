import { formatDate } from "../utils/formatFunctions";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SHOW_TYPE_KEY } from "../utils/constants";

const SearchResultShows = ({ item }) => {
  return (
    <Link to={`/tv/${item?.id}`}>
      <div className="flex flex-col sm:flex-row gap-4 m-4 border-slate-400 border rounded-xl  items-center">
        <div className="w-full sm:w-1/3 flex-shrink-0  h-64 lg:h-56 lg:w-3/12 rounded-tr-xl sm:rounded-tr-none rounded-tl-xl sm:rounded-bl-xl bg-gray-100 border-r-slate-400 border-r">
          <Image
            type={SHOW_TYPE_KEY}
            path={item?.poster_path}
            className="w-full h-full object-fill rounded-tr-xl sm:rounded-tr-none rounded-tl-xl sm:rounded-bl-xl "
            alt={`image of ${item?.name}`}
          />
        </div>
        <div className="">
          <div className=" text-center sm:!text-left text-3xl font-bold">
            {item?.name}
          </div>
          <div className="text-center sm:!text-left italic mt-2">
            {formatDate(item?.first_air_date)}
          </div>

          <div className=" p-2 sm:pr-2 sm:pl-0 pb-1 mt-2 line-clamp-5 sm:line-clamp-3 overflow-hidden">
            {item?.overview}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultShows;
