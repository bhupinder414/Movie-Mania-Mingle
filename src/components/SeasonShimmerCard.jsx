import {
  ShimmerText,
  ShimmerThumbnail,
  ShimmerTitle,
} from "react-shimmer-effects";

const SeasonShimmerCard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-2xl sm:pr-4">
      <div className="sm:w-56 h-64 rounded-tl-2xl sm:rounded-bl-2xl rounded-tr-2xl sm:rounded-tr-none flex-shrink-0">
        <ShimmerThumbnail
          className="rounded-tl-2xl sm:rounded-bl-2xl rounded-tr-2xl sm:rounded-tr-none"
          height={255}
        />
      </div>
      <div className="w-full pt-4 px-4">
        <ShimmerTitle line={3} gap={10} variant="primary" />
        <ShimmerText line={5} gap={10} />
      </div>
    </div>
  );
};

export default SeasonShimmerCard;
