import TrendingCard from "./TrendingCard";
function TrendingMoviesContainer({ movies }) {
  return (
    <div className="flex flex-row items-start gap-4 flex-wrap m-5 ml-10 ">
      {movies?.map((movie) => (
        <TrendingCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default TrendingMoviesContainer;
