import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailerVideo: [],
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
    moviesName:[],
    moviesResult:[],
    movieSuggestionLoading:false
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addSuggestedMovie:(state,action)=>{
      const {moviesName,moviesResult}= action.payload
      state.moviesName = moviesName
      state.moviesResult = moviesResult
    },
    setMovieSuggestionLoading:(state,action)=>{
      state.movieSuggestionLoading=!state.movieSuggestionLoading
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addSuggestedMovie,
  setMovieSuggestionLoading
} = moviesSlice.actions;
export default moviesSlice.reducer;
