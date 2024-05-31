import TVShowCard from "./TVShowCard";
function TVShowsContainer({ shows }) {
  return (
    <div className="flex flex-row items-start gap-4 flex-wrap m-5 ml-10 ">
      {shows?.map((show) => (
        <TVShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default TVShowsContainer;
