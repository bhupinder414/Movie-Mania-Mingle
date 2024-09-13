import { Link } from "react-router-dom";
import Card from "./Card";
import { formatDate } from "../utils/formatFunctions";
import Image from "./Image";
import { SHOW_TYPE_KEY } from "../utils/constants";

const TVShowCard = ({ show: { poster_path, name, first_air_date, id } }) => {
  return (
    <Card>
      <Link to={`/tv/${id}`}>
        <div className="h-[23rem] min-w-full  rounded-xl bg-gray-100">
          <Image
            type={SHOW_TYPE_KEY}
            path={poster_path}
            className=" w-full h-full rounded-xl object-fill"
            alt={`image of ${name}`}
          />
        </div>
        <div className="text-center text-xl font-bold mt-2">{name}</div>
        <div className="text-center text-xl text-slate-400">
          {formatDate(first_air_date)}
        </div>
      </Link>
    </Card>
  );
};

export default TVShowCard;
