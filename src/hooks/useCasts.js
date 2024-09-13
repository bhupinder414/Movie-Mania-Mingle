import { useEffect, useState } from "react";
import { fetchMovieCasts, fetchTVCredits } from "../apis/fetchMovies";
import { MOVIE_TYPE_KEY } from "../utils/constants";

const useCasts = (type, id) => {
  const [data, setData] = useState({ cast: null, crew: null });
  useEffect(() => {
    const fetchData = async () => {
      if (type === MOVIE_TYPE_KEY) {
        const data = await fetchMovieCasts(id);
        setData(data);
      } else {
        const data = await fetchTVCredits(id);
        setData(data);
      }
    };
    fetchData();
  }, [type, id]);
  return data;
};

export default useCasts;
