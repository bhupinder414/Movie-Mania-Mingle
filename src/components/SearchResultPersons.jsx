import { useEffect, useState } from "react";
import { IMAGE_BASE_URL } from "../helpers/creds.env";
import defaultImg from "./../assets/default_person.jpg";
import { fetchDetail } from "../apis/fetchMovies";
import { Link } from "react-router-dom";

function SearchResultPersons({ item, activeId }) {
  const posterPath = item.poster_path
    ? `${IMAGE_BASE_URL}/${item.poster_path}`
    : defaultImg;

  const { id } = item;
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    async function fetchData() {
      let data = await fetchDetail("person", id);
      setMovieDetail(data);
    }
    fetchData();
  }, [id]);

  return (
    <Link to={`/person/${id}`}>
      <div className="flex gap-4 m-4 border-slate-400 border rounded-xl w-[65%] items-center">
        <img
          src={posterPath}
          className="w-36 min-w-36 rounded-tl-xl rounded-bl-xl border-r-slate-400 border-r"
          alt={`image of ${movieDetail.title}`}
        />
        <div className="">
          <div className="text-3xl font-bold">{movieDetail.name}</div>
          <div className="italic mt-2">{movieDetail.known_for_department}</div>

          <div className=" pr-2 pb-0 mt-2 line-clamp-3 overflow-hidden">
            {movieDetail.biography}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchResultPersons;
