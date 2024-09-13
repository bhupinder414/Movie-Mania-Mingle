import { useEffect, useState } from "react";
import { personKnownFor } from "../apis/fetchMovies";

const useKnownFor = (personID) => {
  const [data, setData] = useState({ cast: null, crew: null });
  useEffect(() => {
    const fetchData = async () => {
      const res = await personKnownFor(personID);
      setData(res);
    };
    fetchData();
  }, [personID]);
  return data;
};

export default useKnownFor;
