import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css'

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.listItem}>
          <Link to={`/movies/${id}`} state={{from: location}} className={css.itemLink}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.exact(
    {id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,}
  )).isRequired,
}