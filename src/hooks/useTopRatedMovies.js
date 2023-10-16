import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/store/movieSlice'

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch()
    const topRatedMovies = useSelector(state=>state.movies.topRatedMovies)
    const getTopRatedMovies = async ()=>{
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      const data = await response.json()
    
      dispatch(addTopRatedMovies(data.results))
    }
    useEffect(()=>{
      topRatedMovies.length === 0 &&getTopRatedMovies()
    },[])

}

export default useTopRatedMovies;
