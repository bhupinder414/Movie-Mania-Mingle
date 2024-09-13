import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";

const SmallTvShimmerCard = () => {
  return (
    <div className=" w-full  flex gap-4 items-center">
      <div className="w-18 h-20">
        <ShimmerThumbnail height={80} rounded />
      </div>
      <div className="w-full sm:w-4/12 md:w-2/12 mt-4">
        <ShimmerTitle line={1} gap={10} variant="primary" />
        <ShimmerTitle line={1} gap={10} variant="primary" />
      </div>
    </div>
  );
};

export default SmallTvShimmerCard;
