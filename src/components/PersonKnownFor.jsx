import TVShowCard from "./TVShowCard";
import TrendingCard from "./TrendingCard";

function PersonKnownFor({ casts }) {
  return (
    <div className="md:pl-20 md:pr-20 p-4 mb-4 mt-4 overflow-x-auto">
      {casts?.length > 0 && (
        <>
          <div className="text-2xl font-semibold">Known For</div>
          <div className=" overflow-x-auto mt-4">
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
