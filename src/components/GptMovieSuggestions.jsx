import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import LodingBar from "./LodingBar";
import { setMovieSuggestionLoading } from "../utils/movieSlice";
const GptMovieSuggestions = () => {
  const moviesReuslt = useSelector((state) => state.movies.moviesResult);
  const moviesName = useSelector((state) => state.movies.moviesName);
  const isLoading = useSelector((state)=>state.movies.movieSuggestionLoading)
  const dispatch = useDispatch()

  
  useEffect(()=>{
   dispatch(setMovieSuggestionLoading())
  },[moviesReuslt])

  if(isLoading) return <LodingBar/>
  if (moviesReuslt?.length === 0 && moviesName?.length === 0) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-50">
      {moviesName.map((movie,index) => (
        <MovieList 
        key={movie}
        title={movie} 
        movies={moviesReuslt[index]} />
      ))}
      <MovieList />
    </div>
  );
};

export default GptMovieSuggestions;
