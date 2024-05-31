import Card from "./Card";
import { formatDate } from "../helpers/formatFunctions";
import { IMAGE_BASE_URL } from "../helpers/creds.env";
import defaultImg from "./../assets/default-movie.webp";
import { Link } from "react-router-dom";
function TrendingCard({ movie: { poster_path, title, release_date, id } }) {
  let posterImage = poster_path
    ? `${IMAGE_BASE_URL}/${poster_path}`
    : defaultImg;
  return (
    <Card>
      <Link to={`/movies/${id}`}>
        <img className="rounded-xl min-h-[86%] min-w-full" src={posterImage} />
        <div className="text-center text-xl font-bold mt-2">{title}</div>
        <div className="text-center text-xl text-slate-400">
          {formatDate(release_date)}
        </div>
      </Link>
    </Card>
  );
}

export default TrendingCard;
