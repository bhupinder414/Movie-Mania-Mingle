import { useEffect, useState } from "react";
import { fetchSeasonDetail } from "../apis/fetchMovies";

const useSeasonDetail = (showId, seasonNumber) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSeasonDetail(showId, seasonNumber);
      setData(data);
    };
    fetchData();
  }, [showId, seasonNumber]);
  return data;
};

export default useSeasonDetail;
