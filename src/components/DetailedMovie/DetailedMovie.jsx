import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
// import defaultimage from '../../img/defaultposter.png'
import { getMovieDetails } from 'services/movieApi';
import { DetailedMovieCard } from './DetailedMovieCard';
import css from './DetailedMovie.module.css'

export const DetailedMovie = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/')

  useEffect(() => {
    try {
        getMovieDetails(movieId).then(resp => setMovieDetails(resp));
    } catch (error) {
        console.log(error)
    }
  }, [movieId]);

  return (
    <div className={css.cardContainer}>
        <Link to={goBack.current}>
            <button type='button' className={css.goBackBtn}>Go back</button>
        </Link>
        <DetailedMovieCard movie={movieDetails}/>
    </div>
  )
};
