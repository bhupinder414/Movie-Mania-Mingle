import ShimmerReviewCard from "./ShimmerReviewCard";
import { REVIEWS_LENGTH } from "../utils/constants";

const ShimmerReviewsPage = () => {
  return (
    <div className=" md:mr-10 mt-4 ">
      {Array.from({ length: REVIEWS_LENGTH }).map((_, ind) => (
        <ShimmerReviewCard key={ind} />
      ))}
    </div>
  );
};

export default ShimmerReviewsPage;
