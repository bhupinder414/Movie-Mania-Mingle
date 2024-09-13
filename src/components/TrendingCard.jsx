import Card from "./Card";
import { formatDate } from "../utils/formatFunctions";
import { Link } from "react-router-dom";
import { MOVIE_TYPE_KEY } from "../utils/constants";
import Image from "./Image";

const TrendingCard = ({ movie: { poster_path, title, release_date, id } }) => {
  return (
    <Card>
      <Link to={`/movies/${id}`}>
        <div className="h-[23rem] min-w-full  rounded-xl bg-gray-100">
          <Image
            type={MOVIE_TYPE_KEY}
            path={poster_path}
            className=" w-full h-full rounded-xl object-fill"
            alt={`image of ${title}`}
          />
        </div>
        <div className="text-center text-xl font-bold mt-2">{title}</div>
        <div className="text-center text-xl text-slate-400">
          {formatDate(release_date)}
        </div>
      </Link>
    </Card>
  );
};

export default TrendingCard;
