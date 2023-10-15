
import Header from './Header'

import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useNowPLayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

const Browse = () => {
  console.log("process.env.REACT_APP_KEY",process.env.REACT_APP_KEY)
useNowPLayingMovies()
 usePopularMovies()
 useUpcomingMovies()
 useTopRatedMovies()
 
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse