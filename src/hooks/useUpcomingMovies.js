import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice'

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch()
    const upcomingMovies = useSelector(state=>state.movies.upcomingMovies)
    const getUpcomingMovies = async ()=>{
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2', API_OPTIONS)
      const data = await response.json()
    
      dispatch(addUpcomingMovies(data.results))
    }
    useEffect(()=>{
      upcomingMovies.length === 0&&getUpcomingMovies()
    },[])

}

export default useUpcomingMovies;
