import {
  ShimmerCircularImage,
  ShimmerText,
  ShimmerTitle,
} from "react-shimmer-effects";

const ShimmerReviewCard = () => {
  return (
    <div className="border-gray-200 border px-4 pt-2 pb-0  mt-4 mb-2 rounded-2xl ">
      <div className="flex flex-row items-center gap-2">
        <ShimmerCircularImage size={70} />
        <div className="w-full sm:w-6/12 md:w-5/12">
          <ShimmerTitle line={3} variant="primary" />
        </div>
      </div>
      <ShimmerText line={3} gap={10} />
    </div>
  );
};

export default ShimmerReviewCard;
