import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/store/movieSlice'

const useNowPLayingMovies = ()=>{

  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)

    const dispatch = useDispatch()
    const getNowPlayingMovie = async ()=>{
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const data = await response.json()
    
      dispatch(addNowPlayingMovies(data.results))
    }
    useEffect(()=>{
      nowPlayingMovies.length === 0 && getNowPlayingMovie()
    },[])

}

export default useNowPLayingMovies;
