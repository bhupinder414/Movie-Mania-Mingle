import { useEffect, useState } from "react";
import { fetchSimilar } from "../apis/fetchMovies";

const useSimilar = (type, id) => {
  const [data, setData] = useState({ results: null });
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSimilar(type, id);
      setData(data);
    };
    fetchData();
  }, [type, id]);
  return data;
};

export default useSimilar;
