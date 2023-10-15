import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideoKey = useSelector((state) => state.movies?.trailerVideo);

  return (
    <div className="w-full h-screen  overflow-hidden">
      <iframe
        className="w-full h-full first-letter:object-cover"
        src={`https://www.youtube.com/embed/${trailerVideoKey?.key}?&autoplay=1&mute=1&controls=0&rel=0`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;