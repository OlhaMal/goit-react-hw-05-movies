import { NavLink } from 'react-router-dom';
import css from './DetailedMovie.module.css'

export const AditionalInfo = () => {
  return (
    <div className={css.addInfo}>
    <h2 className={css.addTitle}>Aditional information</h2>
    <ul className={css.addList}>
        <li><NavLink to='cast' className={css.addLink}>Cast</NavLink></li>
        <li><NavLink to='reviews' className={css.addLink}>Reviews</NavLink></li>
    </ul>
  </div>
  )
};
