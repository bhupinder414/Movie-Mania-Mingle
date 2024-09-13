import {
  ShimmerText,
  ShimmerThumbnail,
  ShimmerTitle,
} from "react-shimmer-effects";

const SearchShimmerCard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 m-4 md:ml-12  rounded-xl lg:w-[65%] items-center  ">
      <div className="w-2/3 sm:w-2/5 md:w-1/5 h-64">
        <ShimmerThumbnail height={250} rounded />
      </div>
      <div className="w-2/3 sm:w-3/5 md:w-1/2">
        <ShimmerTitle line={3} gap={10} variant="primary" />
        <ShimmerText line={6} gap={10} />
      </div>
    </div>
  );
};

export default SearchShimmerCard;
