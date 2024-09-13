import { SHOW_TYPE_KEY } from "../utils/constants";
import { formatDate } from "../utils/formatFunctions";
import Image from "./Image";

const SeasonCard = ({ season, type }) => {
  const { name, poster_path, air_date, overview, episode_count } = season || {};
  return (
    <div className="flex flex-col  sm:flex-row gap-4  border border-gray-300 my-4 rounded-2xl items-center sm:pr-4 shadow-lg">
      <div className="bg-gray-100 w-full h-96 sm:w-1/2  lg:w-56 lg:h-64 rounded-tl-2xl rounded-bl-2xl flex-shrink-0">
        <Image
          type={SHOW_TYPE_KEY}
          path={poster_path}
          className="w-full h-full object-fill rounded-tr-xl sm:rounded-tr-none rounded-tl-xl sm:rounded-bl-xl "
          alt={`image of ${name}`}
        />
      </div>
      <div className="px-2 pb-2 sm:pb-0 text-center sm:!text-left ">
        <div className=" text-2xl font-bold">{name}</div>
        <div className=" italic text-lg">{formatDate(air_date)}</div>
        <div className=" font-bold text-lg">{episode_count} Episodes</div>
        <div
          className={`${
            type === "brief"
              ? "line-clamp-5 sm:line-clamp-7 overflow-hidden"
              : ""
          }`}
        >
          {overview}
        </div>
      </div>
    </div>
  );
};



export default SeasonCard;
