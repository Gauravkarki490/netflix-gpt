import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies.length === 0)
        return null
    // const mainMovie = movies[Math.floor(Math.random() * movies.length)]

    const mainMovie = movies[0]

    const {original_title,overview,id} = mainMovie





  return (
    <div>
        <VideoTitle title={original_title}  overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer