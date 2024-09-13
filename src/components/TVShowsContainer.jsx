import TVShowCard from "./TVShowCard";
const TVShowsContainer = ({ shows }) => {
  return (
    <div className="flex flex-row items-start justify-center lg:justify-normal sm:justify-evenly  gap-4 flex-wrap lg:m-5 lg:ml-10 lg:mr-1">
      {shows?.map((show) => (
        <TVShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default TVShowsContainer;
