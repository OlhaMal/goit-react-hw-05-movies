import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchMovies } from '../../services/movieApi';
import { useState, useEffect } from 'react';
import { SearchBox } from './SearchBox';

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';


  const handleSubmit = searchResult => {
    setSearchQuery(searchResult !== '' ? { query: searchResult } : {});
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      searchMovies(query).then(resp => setMovies(resp));
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <div>
      <SearchBox onSubmitInput={handleSubmit} />
      {movies.length === 0 && query !== '' && <p>There is no movies matching your search: '{query}'</p>}
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </div>
  );
};
