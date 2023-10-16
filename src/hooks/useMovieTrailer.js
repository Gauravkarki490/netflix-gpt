import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store=>store.movies.trailerVideo)
  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const videoData = await response.json();

    const filterTrailers = videoData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length
      ? filterTrailers[0]
      : videoData.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    trailerVideo.length === 0 && getMovieVideos()
  }, []);
};

export default useMovieTrailer;
