import { Link, useLoaderData } from "react-router-dom";

import { IMAGE_BASE_URL } from "../helpers/creds.env";
import defaultImg from "./../assets/default-movie.webp";
import { formatDate } from "../helpers/formatFunctions";
import CastCard from "./CastCard";

import BriefReviews from "./BriefReviews";
import {
  fetchDetail,
  fetchSimilar,
  fetchTVCredits,
  fetchReviews,
  fetchVideos,
} from "../apis/fetchMovies";
import TVShowCard from "./TVShowCard";

function TVShowDetail() {
  const data = useLoaderData();
  const {
    serial_cast: { crew, cast },
    reviews,
    similar_shows,

    serial_detail: {
      name,
      overview,
      poster_path,
      backdrop_path,
      vote_average,
      first_air_date,
      production_countries,
      spoken_languages,
      tagline,
      genres,
    },
  } = data;

  const posterPath = poster_path
    ? `${IMAGE_BASE_URL}/${poster_path}`
    : defaultImg;
  const backDropPath = backdrop_path
    ? `${IMAGE_BASE_URL}${backdrop_path}`
    : defaultImg;

  const show_genres = genres.map((genre) => genre.id).join(",");

  const creator = crew.filter(
    (member) =>
      member.known_for_department === "Creator" && member.department === "Crew"
  );

  let sortedReviews = reviews.results.sort(
    (r1, r2) => new Date(r2.created_at) - new Date(r1.created_at)
  );

  return (
    <>
      <div
        style={{ backgroundImage: `url(${backDropPath})` }}
        className={`grid grid-cols-4  gap-12 p-8   bg-contain bg-center   bg-white/30 bg-blend-difference`}
      >
        <div className="col-span-1">
          <img
            src={posterPath}
            className="rounded-xl  object-cover w-full h-full"
            alt={`${name} Poster`}
          />
        </div>
        <div className="col-span-3">
          <h2 className="text-5xl font-bold text-white">{name}</h2>
          <ul className="flex gap-8 list-disc list-inside pt-2 text-white text-lg">
            {production_countries?.[0]?.iso_3166_1 && (
              <li>{production_countries?.[0]?.iso_3166_1}</li>
            )}
            {spoken_languages?.[0]?.english_name && (
              <li>{spoken_languages?.[0]?.english_name}</li>
            )}
            {formatDate(first_air_date) && (
              <li>{formatDate(first_air_date)}</li>
            )}
          </ul>

          <div className="flex gap-4 flex-wrap pt-4">
            {genres.map((genre, ind) => {
              let color = ind % 2 == 0 ? "bg-lime-600" : "bg-pink-800";
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
            <span>{Number(vote_average).toFixed(1) + "/10"}</span>
          </div>

          <div className="text-white italic text-md pt-2">{tagline}</div>
          {overview && (
            <>
              <div className="text-white text-2xl font-bold pt-4 pb-1">
                Overview
              </div>
              <div className="text-white text-xl">{overview}</div>
            </>
          )}

          <div className="pt-4">
            {creator.map((ele) => {
              return (
                <div
                  key={ele.id}
                  className="flex flex-col flex-wrap gap-1  text-white"
                >
                  <span className="font-bold text-xl">{ele.name}</span>
                  <span className=" text-md">{ele.known_for_department}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BriefReviews reviews={sortedReviews} />

      <div className="ml-10 mt-4 text-4xl font-bold">
        <h1>Series Cast</h1>
      </div>
      {cast.length === 0 && (
        <div className="text-xl ml-10 mt-4 mb-2  ">
          Cast Detail Not Available.
        </div>
      )}
      {cast.length > 0 && (
        <div className="flex gap-4 w-[96%] overflow-x-scroll m-8 mt-2">
          {cast.map((ele) => (
            <CastCard
              key={ele.id}
              id={ele.id}
              character={ele?.roles?.[0].character}
              original_name={ele.original_name}
              profile_path={ele.profile_path}
              known_for_department={ele.known_for_department}
              episode_count={ele?.roles?.[0].episode_count}
            />
          ))}
        </div>
      )}
      {similar_shows.results.length > 0 && (
        <>
          <div className="ml-10 mt-4 text-4xl font-bold flex gap-4">
            <h1>Similar TV Shows</h1>
            <Link
              className="bg-purple-400 text-white p-1 pl-2 pr-2  rounded-lg"
              to={`/tv/all?genres=${show_genres}`}
            >
              Explore
            </Link>
          </div>
          <div className=" flex flex-no-wrap overflow-x-auto  m-8 mt-2">
            {similar_shows.results.map((show) => (
              <TVShowCard key={show.id} show={show} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default TVShowDetail;

export async function loader({ params }) {
  const { showId } = params;

  let result = {};

  result["serial_detail"] = await fetchDetail("tv", showId);
  result["serial_cast"] = await fetchTVCredits(showId);
  result["reviews"] = await fetchReviews("tv", showId);
  result["similar_shows"] = await fetchSimilar("tv", showId);
  result["videos"] = await fetchVideos("tv", showId);
  return result;
}
