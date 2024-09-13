import {
  ShimmerText,
  ShimmerThumbnail,
  ShimmerTitle,
} from "react-shimmer-effects";

const PersonDetailShimmer = () => {
  return (
    <div className="flex flex-col sm:flex-row  p-8 md:pl-20 md:pr-20 gap-4 bg-gray-800/30 text-white">
      <div className="sm:w-2/5 md:w-3/12">
        <ShimmerThumbnail height={360} rounded />
      </div>
      <div className="sm:w-3/5 md:w-6/12">
        <ShimmerTitle line={3} gap={10} variant="primary" />
        <ShimmerText line={7} gap={10} />
        <ShimmerTitle line={1} gap={10} variant="primary" />
        <div className="flex gap-3 ">
          <div className="w-full">
            <ShimmerTitle line={2} gap={10} variant="primary" />
          </div>
          <div className="w-full">
            <ShimmerTitle line={2} gap={10} variant="primary" />
          </div>{" "}
          <div className="w-full">
            <ShimmerTitle line={2} gap={10} variant="primary" />
          </div>{" "}
          <div className="w-full">
            <ShimmerTitle line={2} gap={10} variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetailShimmer;
