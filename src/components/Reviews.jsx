import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import ShimmerReviewsPage from "./ShimmerReviewsPage";
import useReviews from "../hooks/useReviews";
import useDetails from "../hooks/useDetails";
import SmallTVCard from "./SmallTVCard";
import { MOVIE_TYPE_KEY } from "../utils/constants";

const Reviews = ({ id, type }) => {
  const { [id]: dynamicId } = useParams();
  let reviews = useReviews(type, dynamicId);
  const item = useDetails(type, dynamicId);
  let original_title, release_date;
  let poster_path = item?.poster_path;
  if (type === MOVIE_TYPE_KEY) {
    original_title = item?.original_title;
    release_date = item?.release_date;
  } else {
    original_title = item?.name;
    release_date = item?.first_air_date;
  }
  return (
    <div className="mx-10  my-8 w-9/12">
      <SmallTVCard
        posterPath={poster_path}
        name={original_title}
        first_air_date={release_date}
      />
      <div className="text-4xl font-bold mt-6">
        <h1>Reviews</h1>
      </div>
      {!reviews ? (
        <ShimmerReviewsPage />
      ) : (
        <div>
          {reviews?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
