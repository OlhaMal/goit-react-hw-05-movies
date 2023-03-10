import defaultimage from '../../img/defaultposter.png';
import css from './DetailedMovie.module.css';
// import PropTypes from 'prop-types';

export const DetailedMovieCard = ({ movie }) => {
  return (
    <div className={css.card}>
      <img
        src={
          !movie.poster_path
            ? defaultimage
            : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }
        alt={movie.original_title}
        width="250"
        className={css.cardImage}
      />
      <div className={css.cardInfo}>
        <h1 className={css.movieTitle}>
          {movie.title}{' '}
          {movie.release_date && (
            <span>({movie.release_date.substring(0, 4)})</span>
          )}
        </h1>
        <p className={css.score}>
          User score: {Math.round(movie.vote_average * 10)}%
        </p>
        <h2 className={css.overviewTitle}>Overview</h2>
        <p className={css.overviewText}>{movie.overview}</p>
        <h2 className={css.genresTitle}>Genres</h2>
        <p className={css.genresText}>
          {movie.genres?.length > 0
            ? movie.genres.map(genre => genre.name).join(', ')
            : 'There is no information about genres'}
        </p>
      </div>
    </div>
  );
};

// DetailedMovieCard.propTypes = {
//   movie: PropTypes.shape(
//     {
//       poster_path: PropTypes.string,
//       title: PropTypes.string,
//       release_date: PropTypes.string,
//       vote_average: PropTypes.number,
//       overview: PropTypes.string,
//       genres: PropTypes.arrayOf({ name: PropTypes.string }),
//     }),
// };
