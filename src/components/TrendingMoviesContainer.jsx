import TrendingCard from "./TrendingCard";
function TrendingMoviesContainer({ movies }) {
  return (
    <div className="flex flex-row justify-center sm:justify-around lg:justify-start items-start gap-4 flex-wrap sm:m-5 sm:ml-10 ">
      {movies?.map((movie) => (
        <TrendingCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default TrendingMoviesContainer;
