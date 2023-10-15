import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies.length);
  return (
    <div className="px-3 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto whitespace-nowrap">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
