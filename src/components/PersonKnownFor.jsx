import TVShowCard from "./TVShowCard";
import TrendingCard from "./TrendingCard";

function PersonKnownFor({ casts }) {
  return (
    <div className="ml-20 mr-20 mb-4 mt-4">
      {casts?.length > 0 && (
        <>
          <div className="text-2xl font-semibold">Known For</div>
          <div className="w-[84rem] overflow-x-auto mt-4">
            <div className="flex gap-2 flex-nowrap">
              {casts?.map((cast) => {
                if (cast.media_type === "tv") {
                  return <TVShowCard key={cast.id} show={cast} />;
                } else {
                  return <TrendingCard key={cast.id} movie={cast} />;
                }
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PersonKnownFor;
