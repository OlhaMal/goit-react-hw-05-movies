import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react'
import {getTrending} from '../services/movieApi'

const HomePage = () => {
    const [trendMovies, setTrendMovies] = useState([]);

    useEffect(() => {
        getTrending().then(resp => setTrendMovies(resp))
    }, [])

    return (
        <div>
            <MoviesList movies={trendMovies}/>
        </div>
    )
}

export default HomePage