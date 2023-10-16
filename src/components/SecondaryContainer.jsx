import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(state => state.movies?.nowPlayingMovies)
  const popularMovies = useSelector(state => state.movies?.popularMovies)
  const upcomingMovies = useSelector(state => state.movies?.upcomingMovies)
  const topRatedMovies = useSelector(state => state.movies?.topRatedMovies)
  
  if(!nowPlayingMovies && !popularMovies && !upcomingMovies && !topRatedMovies)
  return null

  return (
    <div className="bg-black px-4 md:px-8 py-4">
      <div className="md:-mt-52 pt-4 relative z-[8]">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      </div>
      <MovieList title={"Trending"} movies={popularMovies} />
      <MovieList title={"Upcoming"} movies={upcomingMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
    </div>
  );
};

export default SecondaryContainer;

