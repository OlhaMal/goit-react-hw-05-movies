import PropTypes from 'prop-types';
import css from '../SearchForm/SearchBox/SearchBox.module.css'

export const NoResults = ({search}) => {
return( <p className={css.noResMess}>There is no movies matching your search: '{search}'</p>)
}

NoResults.propTypes = {
 search: PropTypes.string.isRequired,
}