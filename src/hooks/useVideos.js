import { useEffect, useState } from "react";
import { fetchVideos } from "../apis/fetchMovies";

const useVideos = (type, id) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVideos(type, id);
      setData(data);
    };
    fetchData();
  }, [type, id]);
  return data;
};

export default useVideos;
