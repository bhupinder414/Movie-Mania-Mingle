import { Link, useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import useReviews from "../hooks/useReviews";
import ShimmerReviewCard from "./ShimmerReviewCard";
import { REVIEW_SHIMMER_LENGTH } from "../utils/constants";

const BriefReviews = ({ type, id }) => {
  const { [id]: dynamicId } = useParams();
  let reviews = useReviews(type, dynamicId);
  let length = reviews?.length;
  reviews = reviews?.slice(0, 2);

  return (
    <div className="ml-10 mr-10 mt-4 ">
      <div className="text-4xl font-bold">
        <h1>Reviews</h1>
      </div>
      <div className="mt-4 md:w-8/12">
        {!reviews ? (
          Array.from({ length: REVIEW_SHIMMER_LENGTH }).map((_, ind) => (
            <ShimmerReviewCard key={ind} />
          ))
        ) : reviews?.length === 0 ? (
          <span className="text-xl">No Reviews Found.</span>
        ) : (
          reviews?.map((review) => (
            <ReviewCard key={review.id} review={review} brief="true" />
          ))
        )}
      </div>
      {length > 2 && (
        <Link
          to="reviews"
          className="text-xl mt-4 font-semibold hover:text-slate-500"
        >
          See All Reviews
        </Link>
      )}
    </div>
  );
};

export default BriefReviews;
