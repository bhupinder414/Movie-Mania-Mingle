import { useEffect } from "react";
import { useState } from "react";
import { fetchReviews } from "../apis/fetchMovies";

export const useReviews = (type, id) => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const reviews = await fetchReviews(type, id);
      let sortedReviews = reviews?.results?.sort(
        (r1, r2) => new Date(r2.created_at) - new Date(r1.created_at)
      );
      setReviews(sortedReviews);
    };
    fetchData();
  }, [type, id]);
  return reviews;
};

export default useReviews;
