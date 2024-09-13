import { Link } from "react-router-dom";
import SeasonCard from "./SeasonCard";
import SeasonShimmerCard from "./SeasonShimmerCard";

const LatestSeason = ({ seasons, name, poster_path, first_air_date }) => {
  const latestSeason = seasons?.[seasons?.length - 1];
  const moreSeasons = seasons?.length > 1;
  return (
    <div className="m-10 mb-0">
      <div className="text-4xl font-bold mb-4">Latest Season</div>
      {!latestSeason ? (
        <div className=" md:w-8/12 ">
          <SeasonShimmerCard />
        </div>
      ) : (
        <>
          <div className="lg:w-8/12">
            <Link to={`seasons/${latestSeason?.season_number}`}>
              <SeasonCard season={latestSeason} key={latestSeason?.id} type="brief" />
            </Link>
          </div>
          {moreSeasons && (
            <Link
              to="seasons"
              state={{ seasons, name, poster_path, first_air_date }}
              className="font-semibold hover:text-slate-500 text-xl"
            >
              See All Seasons
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default LatestSeason;
