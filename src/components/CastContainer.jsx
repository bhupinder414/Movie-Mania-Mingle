import { MOVIE_SHIMMER_CONTAINER_LENGTH } from "../utils/constants";
import CastCard from "./CastCard";
import ShimmerContainer from "./ShimmerContainer";

const CastContainer = ({ cast,label }) => {
  return (
    <>
      <div className="ml-10 mt-4 text-4xl font-bold">
        <h1>{label}</h1>
      </div>

      <div className="flex gap-4 md:w-[96%] overflow-x-scroll m-8 mt-2 custom-scrollbar pb-1">
        {!cast ? (
          <ShimmerContainer length={MOVIE_SHIMMER_CONTAINER_LENGTH} />
        ) : (
          cast?.map((cast) => (
            <CastCard
              key={cast.id}
              character={cast.character}
              id={cast.id}
              original_name={cast.original_name}
              profile_path={cast.profile_path}
              known_for_department={cast.known_for_department}
            />
          ))
        )}
      </div>

      {cast?.length === 0 && (
        <div className="text-xl ml-10 mt-4 mb-2  ">
          Cast Detail Not Available.
        </div>
      )}
    </>
  );
};

export default CastContainer;
