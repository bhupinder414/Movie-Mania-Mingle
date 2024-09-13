import { useParams } from "react-router-dom";
import { IoIosStar, IoMdPlay, IoMdTime } from "react-icons/io";
import DetailShimmer from "./DetailShimmer";
import useModalContext from "../hooks/useModalContext";
import useVideos from "../hooks/useVideos";
import { MOVIE_TYPE_KEY, VITE_IMAGE_BASE_URL } from "../utils/constants";
import {
  formatCurrencyUS,
  formatDate,
  formatMinsToHours,
} from "../utils/formatFunctions";
import defaultImg from "./../assets/default-movie.webp";
import Image from "./Image";
import { MdDateRange } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { TfiWorld } from "react-icons/tfi";

const ItemShowDetailed = ({ crew, genres, id, item, type }) => {
  const { [id]: dynamicId } = useParams();
  const { openModal } = useModalContext();
  const videos = useVideos(type, dynamicId);

  if (!item) {
    return <DetailShimmer />;
  }

  const trailers = videos?.results?.filter(
    (item) =>
      item.type === "Trailer" &&
      item.official === true &&
      item.site === "YouTube"
  );
  const {
    [type === MOVIE_TYPE_KEY ? "title" : "name"]: name,
    [type === MOVIE_TYPE_KEY ? "release_date" : "first_air_date"]:
      first_air_date,
    overview,
    poster_path,
    backdrop_path,
    vote_average,
    production_countries,
    spoken_languages,
    tagline,
    budget,
    revenue,
    runtime,
  } = item;

  const creators = new Map();
  if (type == MOVIE_TYPE_KEY) {
    const directorsArray =
      crew?.filter((ele) => ele.known_for_department === "Directing") || [];
    directorsArray.forEach((ele) => {
      if (creators.has(ele.name)) {
        creators.set(ele.name, [...creators.get(ele.name), ele.job]);
      } else {
        creators.set(ele.name, [ele.job]);
      }
    });
  } else {
    crew?.forEach((ele) => {
      creators.set(ele.name, ["Creator"]);
    });
  }

  const backDropPath = backdrop_path
    ? `${VITE_IMAGE_BASE_URL}${backdrop_path}`
    : defaultImg;

  const handleOpenModal = () => {
    openModal(trailers?.[0]?.name, trailers?.[0]?.key);
  };

  return (
    <div
      style={{ backgroundImage: `url(${backDropPath})` }}
      className={` table  p-8   bg-contain bg-center   bg-white/30 bg-blend-difference`}
    >
      <div className="w-full sm:w-5/12 md:w-5/12 lg:w-3/12 h-1/3 sm:h-2/3 md:h-[30rem] mr-6 mb-4 sm:mb-2 float-left ">
        <Image
          type={MOVIE_TYPE_KEY}
          path={poster_path}
          alt={`${name} Poster`}
        />
      </div>
      <div className="">
        <h2 className="text-3xl md:text-5xl text-center sm:!text-left font-bold text-white">
          {name}
        </h2>
        <ul className="flex gap-4 flex-row flex-wrap  list-disc list-inside pt-2 text-white sm:text-lg">
          {production_countries?.[0]?.iso_3166_1 && (
            <FlexItem>
              <TfiWorld />
              <span>{production_countries?.[0]?.iso_3166_1}</span>
            </FlexItem>
          )}
          {spoken_languages?.[0]?.english_name && (
            <FlexItem>
              <HiMiniSpeakerWave />
              <span>{spoken_languages?.[0]?.english_name} </span>
            </FlexItem>
          )}
          {formatDate(first_air_date) && (
            <FlexItem>
              <MdDateRange />
              <span>{formatDate(first_air_date)}</span>
            </FlexItem>
          )}
          {runtime && (
            <FlexItem>
              <IoMdTime />
              <span>{formatMinsToHours(runtime)}</span>
            </FlexItem>
          )}
        </ul>

        <div className="flex gap-4 flex-wrap pt-4">
          {genres?.map((genre, ind) => {
            let color = ind % 2 == 0 ? "bg-violet-400" : "bg-blue-300";
            return (
              <span
                className={` text-sm p-2 sm:text-lg  rounded-xl text-white opacity-90 ${color}`}
                key={genre.id}
              >
                {genre.name}
              </span>
            );
          })}
        </div>

        {vote_average ? (
          <div className="text-white italic font-bold  text-md pt-2 flex items-center gap-2">
            <IoIosStar />
            <span>{Number(vote_average).toFixed(1) + "/10"}</span>
          </div>
        ) : null}
        {budget ? (
          <div className="text-white italic font-bold  text-md pt-2 flex gap-2">
            <span>Budget:</span>
            <span className=" font-normal">{formatCurrencyUS(budget)}</span>
          </div>
        ) : null}
        {revenue ? (
          <div className="text-white italic font-bold  text-md pt-2 flex gap-2">
            <span>Revenue:</span>
            <span className=" font-normal">{formatCurrencyUS(revenue)}</span>
          </div>
        ) : null}

        {trailers?.length > 0 && (
          <div>
            <a
              onClick={handleOpenModal}
              className="gap-2 items-center text-white pt-2 pb-2 text-xl font-bold cursor-pointer inline-flex hover:text-slate-200"
            >
              <IoMdPlay className="w-6 h-6" />
              <span>Play Trailer</span>
            </a>
          </div>
        )}

        <div className="text-white italic text-md pt-2">{tagline}</div>
        {overview && (
          <>
            <div className="text-white text-xl sm:text-2xl font-bold pt-4 pb-1">
              Overview
            </div>
            <div className="text-white sm:text-xl">{overview}</div>
          </>
        )}

        <div className="pt-4 flex flex-wrap gap-2 sm:gap-4 md:gap-8">
          {[...creators]?.map(([key, value]) => {
            return (
              <div
                key={key}
                className="flex flex-col flex-wrap gap-1  text-white"
              >
                <span className="font-bold text-xl">{key}</span>
                <span className=" text-md">{value.join(", ")}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const FlexItem = ({ children }) => {
  return <li className="flex  gap-2 items-center">{children}</li>;
};

export default ItemShowDetailed;
