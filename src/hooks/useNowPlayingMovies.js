import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPLayingMovies = ()=>{
    const dispatch = useDispatch()
    const getNowPlayingMovie = async ()=>{
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const data = await response.json()
    
      dispatch(addNowPlayingMovies(data.results))
    }
    useEffect(()=>{
      getNowPlayingMovie()
    },[])

}

export default useNowPLayingMovies;
