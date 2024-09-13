import TrendingCard from "./TrendingCard";
const TrendingMoviesContainer = ({ movies }) => {
  return (
    <div className="flex flex-row md:justify-center justify-around lg:justify-start items-start gap-4 flex-wrap sm:m-5 md:ml-10 ">
      {movies?.map((movie) => (
        <TrendingCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default TrendingMoviesContainer;
