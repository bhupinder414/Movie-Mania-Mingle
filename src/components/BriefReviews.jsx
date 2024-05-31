import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function BriefReviews({ reviews }) {
  let length = reviews?.length;
  reviews = reviews?.slice(0, 2);

  return (
    <div className="ml-10 mr-10 mt-4 ">
      <div className="text-4xl font-bold">
        <h1>Reviews</h1>
      </div>
      <div className="mt-4">
        {reviews?.length === 0 ? (
          <span className="text-xl">No Reviews Found.</span>
        ) : (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
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
}

export default BriefReviews;
