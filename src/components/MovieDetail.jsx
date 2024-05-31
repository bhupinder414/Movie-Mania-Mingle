import { Link, useLoaderData } from "react-router-dom";
import {
  fetchMovieCasts,
  fetchDetail,
  fetchVideos,
  fetchSimilar,
  fetchReviews,
} from "../apis/fetchMovies";
import defaultImg from "./../assets/default-movie.webp";
import {
  formatCurrencyUS,
  formatDate,
  formatMinsToHours,
} from "../helpers/formatFunctions";
import CastCard from "./CastCard";
import Modal from "./Modal";
import { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import TrendingCard from "./../components/TrendingCard";
import BriefReviews from "./BriefReviews";

const VITE_IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function MovieDetail() {
  const data = useLoaderData();
  const {
    movie_detail: movie,
    movie_cast,
    videos,
    similar_movies: { results: similar_movies_data },
    reviews,
  } = data;

  let sortedReviews = reviews.results.sort(
    (r1, r2) => new Date(r2.created_at) - new Date(r1.created_at)
  );

  const [isOpen, setIsOpen] = useState(false);

  const genres = movie.genres.map((genre) => genre.id).join(",");

  const trailers = videos.results.filter(
    (item) =>
      item.type === "Trailer" &&
      item.official === true &&
      item.site === "YouTube"
  );

  const directorsArray = movie_cast?.crew.filter(
    (ele) => ele.known_for_department === "Directing"
  );
  let directors = [];
  for (let ele of directorsArray) {
    directors[ele.id] = directors[ele.id]
      ? { ...directors[ele.id], job: directors[ele.id].job + ", " + ele.job }
      : { job: ele.job, name: ele.original_name };
  }
  const posterPath = movie.poster_path
    ? `${VITE_IMAGE_BASE_URL}/${movie.poster_path}`
    : defaultImg;
  const backDropPath = movie.backdrop_path
    ? `${VITE_IMAGE_BASE_URL}${movie.backdrop_path}`
    : defaultImg;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <Modal
          video_id={trailers[0].key}
          closeModal={closeModal}
          name={trailers[0].name}
        />
      )}
      <div
        style={{ backgroundImage: `url(${backDropPath})` }}
        className={`grid grid-cols-4  gap-12 p-8   bg-contain bg-center   bg-white/30 bg-blend-difference`}
      >
        <div className=" col-span-1">
          <img
            src={posterPath}
            className="rounded-xl w-full"
            alt={`${movie.title} Poster`}
          />
        </div>
        <div className=" col-span-3">
          <h2 className="text-5xl font-bold text-white">{movie.title}</h2>
          <ul className="flex gap-8 list-disc list-inside pt-2 text-white text-lg">
            {movie.production_countries?.[0]?.iso_3166_1 && (
              <li>{movie.production_countries?.[0]?.iso_3166_1}</li>
            )}
            {movie.spoken_languages?.[0]?.english_name && (
              <li>{movie.spoken_languages?.[0]?.english_name}</li>
            )}
            {movie.release_date && <li>{formatDate(movie.release_date)}</li>}
            {movie.runtime && <li>{formatMinsToHours(movie.runtime)}</li>}
          </ul>

          <div className="flex gap-4 flex-wrap pt-4">
            {movie.genres.map((genre, ind) => {
              let color = ind % 2 == 0 ? "bg-violet-400" : "bg-blue-300";
              return (
                <span
                  className={`p-2  rounded-xl text-white ${color}`}
                  key={genre.id}
                >
                  {genre.name}
                </span>
              );
            })}
          </div>
          <div className="text-white italic font-bold  text-md pt-2 flex gap-2">
            <span>Rating:</span>
            <span>{Number(movie.vote_average).toFixed(1) + "/10"}</span>
          </div>
          <div className="text-white italic font-bold  text-md pt-2 flex gap-2">
            <span>Budget:</span>
            <span className=" font-normal">
              {formatCurrencyUS(movie.budget)}
            </span>
          </div>
          <div className="text-white italic font-bold  text-md pt-2 flex gap-2">
            <span>Revenue:</span>
            <span className=" font-normal">
              {formatCurrencyUS(movie.revenue)}
            </span>
          </div>

          {trailers.length > 0 && (
            <div>
              <a
                onClick={openModal}
                className="flex gap-2 items-center text-white pt-2 pb-2 text-xl font-bold cursor-pointer inline-flex hover:text-slate-200"
              >
                <IoMdPlay className="w-6 h-6" />
                <span>Play Trailer</span>
              </a>
            </div>
          )}
          <div className="text-white italic text-md pt-2">{movie.tagline}</div>
          <div className="text-white text-2xl font-bold pt-4 pb-1">
            Overview
          </div>
          <div className="text-white text-xl">{movie.overview}</div>

          <div className="pt-4 flex flex-wrap gap-8">
            {directors.map((ele) => {
              return (
                <div
                  key={ele.name}
                  className="flex flex-col flex-wrap gap-1  text-white"
                >
                  <span className="font-bold text-xl">{ele.name}</span>
                  <span className=" text-md">{ele.job}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BriefReviews reviews={sortedReviews} />

      <div className="ml-10 mt-4 text-4xl font-bold">
        <h1>Cast</h1>
      </div>
      {movie_cast?.cast.length === 0 && (
        <div className="text-xl ml-10 mt-4 mb-2  ">
          Cast Detail Not Available.
        </div>
      )}
      {movie_cast?.cast.length > 0 && (
        <div className="flex gap-4 w-[96%] overflow-x-scroll m-8 mt-2">
          {movie_cast.cast.map((cast) => (
            <CastCard
              key={cast.id}
              character={cast.character}
              id={cast.id}
              original_name={cast.original_name}
              profile_path={cast.profile_path}
              known_for_department={cast.known_for_department}
            />
          ))}
        </div>
      )}
      {similar_movies_data.length > 0 && (
        <>
          {" "}
          <div className="ml-10 mt-4 text-4xl font-bold flex gap-4">
            <h1>Similar Movies</h1>
            <Link
              className="bg-purple-400 text-white p-1 pl-2 pr-2  rounded-lg"
              to={`/movies/all?genres=${genres}`}
            >
              Explore
            </Link>
          </div>
          <div className=" flex flex-no-wrap overflow-x-auto  m-8 mt-2">
            {similar_movies_data.map((movie) => (
              <TrendingCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetail;

export async function loader({ request, params }) {
  const { movieId } = params;
  let result = {};
  result["movie_cast"] = await fetchMovieCasts(movieId);
  result["movie_detail"] = await fetchDetail("movie", movieId);
  result["videos"] = await fetchVideos("movie", movieId);
  result["similar_movies"] = await fetchSimilar("movie", movieId);
  result["reviews"] = await fetchReviews("movie", movieId);
  return result;
}
