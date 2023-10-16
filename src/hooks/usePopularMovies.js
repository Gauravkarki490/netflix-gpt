import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/store/movieSlice'

const usePopularMovies = ()=>{
  const popularMovies = useSelector(state=>state.movies.popularMovies)
    const dispatch = useDispatch()
    const getPopularMovies = async ()=>{
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=2', API_OPTIONS)
      const data = await response.json()
    
      dispatch(addPopularMovies(data.results))
    }
    useEffect(()=>{
      popularMovies.length===0 && getPopularMovies()
    },[])

}

export default usePopularMovies;
