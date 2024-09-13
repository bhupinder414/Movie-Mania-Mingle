import { useEffect, useState } from "react";
import { fetchByCategory } from "../apis/fetchMovies";

export const useFetchByCategory = (category, type, page = 1) => {
  let [data, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchByCategory(category, type, page);
      setData(fetchedData);
    };
    fetchData();
  }, [category, type, page]);
  return data;
};
