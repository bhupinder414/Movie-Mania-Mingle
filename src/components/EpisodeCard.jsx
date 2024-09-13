import { IoMdTime } from "react-icons/io";
import { MOVIE_TYPE_KEY } from "../utils/constants";
import { formatDate, formatMinsToHours } from "../utils/formatFunctions";
import { MdDateRange } from "react-icons/md";
import Image from "./Image";

const EpisodeCard = ({ episode }) => {
  const { still_path, name, episode_number, overview, runtime, air_date } =
    episode;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-7 gap-4 my-4 border border-gray-300 shadow-lg rounded-xl sm:pr-4">
      <div className="w-full h-56 col-span-1 sm:col-span-2  bg-gray-100  rounded-tr-xl sm:rounded-tr-none rounded-tl-xl sm:rounded-bl-xl">
        <Image
          className="w-full h-full object-fill rounded-tr-xl sm:rounded-tr-none rounded-tl-xl sm:rounded-bl-xl"
          type={MOVIE_TYPE_KEY}
          path={still_path}
          alt={`image of ${name}`}
        />
      </div>
      <div className=" col-span-1 sm:col-span-3 lg:col-span-5 px-2">
        <div className="text-2xl font-bold mt-4">
          {episode_number}. {name}
        </div>
        <ul className="flex gap-4 font-semibold text-lg my-2">
          {air_date && (
            <li className="flex items-center gap-2">
              <MdDateRange />
              <span>{formatDate(air_date)}</span>
            </li>
          )}
          <li className="flex items-center gap-2">
            <IoMdTime />
            <span>{formatMinsToHours(runtime)}</span>
          </li>
        </ul>
        <div className="italic my-2">{overview}</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
