import { Link } from "react-router-dom";
import defaultImg from "./../assets/default-movie.webp";
import Card from "./Card";
import { formatDate } from "../helpers/formatFunctions";

const VITE_IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function TVShowCard({ show: { poster_path, name, first_air_date, id } }) {
  let posterImage = poster_path
    ? `${VITE_IMAGE_BASE_URL}/${poster_path}`
    : defaultImg;
  return (
    <Card>
      <Link to={`/tv/${id}`}>
        <img className="rounded-xl min-h-[86%] min-w-full" src={posterImage} />
        <div className="text-center text-xl font-bold mt-2">{name}</div>
        <div className="text-center text-xl text-slate-400">
          {formatDate(first_air_date)}
        </div>
      </Link>
    </Card>
  );
}

export default TVShowCard;
