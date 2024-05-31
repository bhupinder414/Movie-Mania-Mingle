import { useLoaderData } from "react-router-dom";
import { fetchDetail, fetchReviews } from "../apis/fetchMovies";
import ReviewCard from "./ReviewCard";
import { formatDate } from "../helpers/formatFunctions";
import defaultImg from "./../assets/default-movie.webp";

const VITE_IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function Reviews() {
  const {
    reviews: { results: reviews },
    detail: { original_title, release_date, poster_path },
  } = useLoaderData();

  const posterPath = poster_path
    ? `${VITE_IMAGE_BASE_URL}/${poster_path}`
    : defaultImg;

  return (
    <div className="ml-10 mr-10 mt-4 ">
      <div className="text-4xl font-bold flex gap-4 items-center">
        <img
          className="w-20 h-20"
          alt={`poster of ${original_title}`}
          src={posterPath}
        />
        <div>
          <div>{original_title}</div>
          <div className="italic font-normal text-3xl">
            {formatDate(release_date)}
          </div>
        </div>
      </div>
      <div className="text-4xl font-bold mt-6">
        <h1>Reviews</h1>
      </div>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;

export async function loader({ params }) {
  const { movieId } = params;
  let result = {};
  result["reviews"] = await fetchReviews("movie", movieId);
  result["detail"] = await fetchDetail("movie", movieId);
  return result;
}
