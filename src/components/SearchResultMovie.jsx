import { useEffect, useState } from "react";
import { formatDate } from "../helpers/formatFunctions";
import defaultImg from "./../assets/default-movie.webp";
import { fetchDetail } from "../apis/fetchMovies";
import { Link } from "react-router-dom";

const VITE_IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function SearchResultMovie({ item, activeId }) {
  const posterPath = item.poster_path
    ? `${VITE_IMAGE_BASE_URL}/${item.poster_path}`
    : defaultImg;

  const { id } = item;
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    async function fetchData() {
      let data = await fetchDetail("movie", id);
      setMovieDetail(data);
    }
    fetchData();
  }, [id]);

  return (
    <Link to={`/movies/${id}`}>
      <div className="flex gap-4 m-4 border-slate-400 border rounded-xl w-[65%] items-center">
        <img
          src={posterPath}
          className="w-36 min-w-36 rounded-tl-xl rounded-bl-xl border-r-slate-400 border-r"
          alt={`image of ${movieDetail.title}`}
        />
        <div className="">
          <div className="text-3xl font-bold">{movieDetail.title}</div>
          <div className="italic mt-2">
            {formatDate(movieDetail.release_date)}
          </div>
          {movieDetail.genres && (
            <div className="font-semibold mt-2">
              {movieDetail.genres.map((genre) => genre.name).join(", ")}
            </div>
          )}
          <div className=" pr-2 pb-1 mt-2 line-clamp-3 overflow-hidden">
            {movieDetail.overview}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchResultMovie;
