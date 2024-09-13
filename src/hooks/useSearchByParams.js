import { useEffect, useState } from "react";
import { fetchUsingParams } from "../apis/fetchMovies";

const useSearchByParams = (type, query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetchUsingParams(type, query);
      setData(res);
      setLoading(false);
    };
    fetchData();
  }, [type, query]);
  return { data, loading };
};

export default useSearchByParams;
