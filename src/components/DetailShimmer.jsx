import {
  ShimmerBadge,
  ShimmerButton,
  ShimmerText,
  ShimmerThumbnail,
  ShimmerTitle,
} from "react-shimmer-effects";

const DetailShimmer = () => {
  return (
    <div className="bg-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-11 gap-4 p-8 pb-2">
        <div className="max-w-64 mx-auto w-64  sm:max-w-none sm:w-full sm:mx-0  sm:col-span-1 md:col-span-3 ">
          <ShimmerThumbnail height={350} rounded />
        </div>
        <div className="max-w-64 mx-auto w-64  sm:max-w-none sm:w-full sm:col-span-2 md:col-span-6">
          <ShimmerTitle line={1} gap={10} variant="primary" />
          <div className="flex gap-4">
            <ShimmerBadge width={100} />
            <ShimmerBadge width={100} />
            <ShimmerBadge width={100} />
            <ShimmerBadge width={100} />
          </div>
          <div className="flex gap-4">
            <ShimmerButton size="sm" />
            <ShimmerButton size="sm" />
            <ShimmerButton size="sm" />
          </div>
          <ShimmerTitle line={3} gap={10} variant="primary" />
          <ShimmerText line={5} gap={10} />
        </div>
      </div>
    </div>
  );
};

export default DetailShimmer;
