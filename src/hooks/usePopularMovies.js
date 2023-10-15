import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'

const usePopularMovies = ()=>{
    const dispatch = useDispatch()
    const getPopularMovies = async ()=>{
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=2', API_OPTIONS)
      const data = await response.json()
    
      dispatch(addPopularMovies(data.results))
    }
    useEffect(()=>{
      getPopularMovies()
    },[])

}

export default usePopularMovies;
