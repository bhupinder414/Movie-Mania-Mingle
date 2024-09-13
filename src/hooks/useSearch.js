import { useEffect, useState } from "react";
import { searchData } from "../apis/fetchMovies";
import { MOVIE_TYPE_KEY, PERSON_TYPE_KEY, SHOW_TYPE_KEY } from "../utils/constants";

const useSearch = (query) => {
  const [data, setData] = useState({
    movies: null,
    shows: null,
    persons: null,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = {};
      res["movies"] = await searchData(MOVIE_TYPE_KEY, query);
      res["shows"] = await searchData(SHOW_TYPE_KEY, query);
      res["persons"] = await searchData(PERSON_TYPE_KEY, query);
      setData(res);
      setLoading(false);
    };
    fetchData();
  }, [query]);
  return { data, loading };
};

export default useSearch;
