import { useEffect, useState } from "react";
import { fetchGenreNames } from "../apis/fetchMovies";

const useGenreNames = (type) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchGenreNames(type);
      setData(res);
    };
    fetchData();
  }, [type]);
  return data;
};

export default useGenreNames;
