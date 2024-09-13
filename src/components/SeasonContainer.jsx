import { Link, useLocation } from "react-router-dom";
import SeasonCard from "./SeasonCard";
import SmallTVCard from "./SmallTVCard";

const SeasonContainer = ({}) => {
  const { state } = useLocation();
  const seasons = state?.seasons;
  const name = state?.name;
  const first_air_date = state?.first_air_date;
  let poster_path = state?.poster_path;

  return (
    <div className="mx-8 md:w-9/12 lg:w-7/12">
      <SmallTVCard
        posterPath={poster_path}
        name={name}
        first_air_date={first_air_date}
      />
      <div className="text-4xl font-bold mt-6 text-center sm:!text-left">
        Seasons
      </div>
      <div className="flex flex-col ">
        {seasons?.map((season) => (
          <Link to={`${season.season_number}`} key={season.id}>
            <SeasonCard season={season} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeasonContainer;
