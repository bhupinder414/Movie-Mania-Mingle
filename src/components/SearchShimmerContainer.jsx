import { MOVIE_SHIMMER_CONTAINER_LENGTH } from "../utils/constants";
import SearchShimmerCard from "./SearchShimmerCard";

const SearchShimmerContainer = () => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: MOVIE_SHIMMER_CONTAINER_LENGTH }).map((_, ind) => (
        <SearchShimmerCard key={ind} />
      ))}
    </div>
  );
};

export default SearchShimmerContainer;
