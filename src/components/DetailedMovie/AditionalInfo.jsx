import { NavLink } from 'react-router-dom';

export const AditionalInfo = () => {
  return (
    <div>
    <h2>Aditional information</h2>
    <ul>
        <li><NavLink to='cast'>Cast</NavLink></li>
        <li><NavLink to='reviews'>Reviews</NavLink></li>
    </ul>
  </div>
  )
};
