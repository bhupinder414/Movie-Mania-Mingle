import { MOVIE_TYPE_KEY } from "../utils/constants";
import { formatDate } from "../utils/formatFunctions";
import Image from "./Image";
import SmallTvShimmerCard from "./SmallTvShimmerCard";

const SmallTVCard = ({ posterPath, name, first_air_date }) => {
  return (
    <div className=" flex gap-4 items-center my-4 ">
      {!name ? (
        <SmallTvShimmerCard />
      ) : (
        <>
          <div className="w-16 h-20 rounded-lg bg-gray-100">
            <Image
              type={MOVIE_TYPE_KEY}
              path={posterPath}
              alt={`image of ${name}`}
            />
          </div>
          <div>
            <div className="font-bold text-3xl">{name}</div>
            <div className=" italic text-xl">{formatDate(first_air_date)}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default SmallTVCard;
