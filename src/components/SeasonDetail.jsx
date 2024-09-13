import { useParams } from "react-router-dom";
import useSeasonDetail from "../hooks/useSeasonDetail";
import EpisodeCard from "./EpisodeCard";
import SmallTVCard from "./SmallTVCard";
import SeasonShimmerCard from "./SeasonShimmerCard";
import { MOVIE_SHIMMER_CONTAINER_LENGTH } from "../utils/constants";

const SeasonDetail = () => {
  const { seasonNumber, showId } = useParams();
  let seasonDetail = useSeasonDetail(showId, seasonNumber);

  return (
    <div className="m-8  md:w-9/12 lg:w-7/12">
      <SmallTVCard
        posterPath={seasonDetail?.poster_path}
        name={seasonDetail?.name}
        first_air_date={seasonDetail?.air_date}
      />
      <div className="text-4xl font-bold mt-6 text-center sm:!text-left">
        Episodes
      </div>
      <div className="mt-4">
        {!seasonDetail ? (
          <div className="flex flex-col gap-4">
            {Array.from({ length: MOVIE_SHIMMER_CONTAINER_LENGTH }).map(
              (_, ind) => (
                <SeasonShimmerCard key={ind} />
              )
            )}
          </div>
        ) : seasonDetail?.episodes?.length === 0 ? (
          <div className=" text-xl">No Episodes Found.</div>
        ) : (
          seasonDetail?.episodes?.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))
        )}
      </div>
    </div>
  );
};

export default SeasonDetail;
