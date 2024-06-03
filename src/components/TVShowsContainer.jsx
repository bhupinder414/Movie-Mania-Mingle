import TVShowCard from "./TVShowCard";
function TVShowsContainer({ shows }) {
  return (
    <div className="flex flex-row items-start justify-center lg:justify-normal sm:justify-evenly  gap-4 flex-wrap lg:m-5 lg:ml-10 ">
      {shows?.map((show) => (
        <TVShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default TVShowsContainer;
