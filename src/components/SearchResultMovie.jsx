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
      <div className="flex flex-col sm:flex-row gap-4 m-4 border-slate-400 border rounded-xl lg:w-[65%] items-center">
        <img
          src={posterPath}
          className="sm:w-36 sm:min-w-36 w-full rounded-tr-xl sm:rounded-tr-none rounded-tl-xl sm:rounded-bl-xl border-r-slate-400 border-r"
          alt={`image of ${movieDetail.title}`}
        />
        <div className="">
          <div className=" text-center sm:text-left text-3xl font-bold">
            {movieDetail.title}
          </div>
          <div className="text-center sm:text-left italic mt-2">
            {formatDate(movieDetail.release_date)}
          </div>
          {movieDetail.genres && (
            <div className="text-center sm:text-left font-semibold mt-2">
              {movieDetail.genres.map((genre) => genre.name).join(", ")}
            </div>
          )}
          <div className="p-2 sm:pl-0 sm:pr-2 pb-1 mt-2 line-clamp-5 sm:line-clamp-3 overflow-hidden">
            {movieDetail.overview}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchResultMovie;
