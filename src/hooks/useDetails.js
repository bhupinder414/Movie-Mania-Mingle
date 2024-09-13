import { useEffect, useState } from "react";
import { fetchDetail } from "../apis/fetchMovies";

const useDetails = (type, id) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDetail(type, id);
      setData(data);
    };
    fetchData();
  }, [type, id]);
  return data;
};

export default useDetails;
