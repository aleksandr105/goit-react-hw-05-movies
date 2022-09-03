import { Form } from '../../components/Form/Form';
import { useState, useEffect } from 'react';
import { searchMovies } from '../../servise/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearch = ({ searchData }, { resetForm }) => {
    if (searchData.trim() === '') {
      alert('Please enter a query keyword');
      return;
    }
    setQuery(searchData);
    setSearchParams({ movieName: searchData });
    resetForm();
  };

  useEffect(() => {
    if (!query && !searchParams.get('movieName')) {
      return;
    }

    searchMovies(query ?? searchParams.get('movieName')).then(res =>
      res.total_results === 0
        ? alert(`no movie was found by request ${query}`)
        : setMovies(res.results)
    );
  }, [query, searchParams]);

  return (
    <>
      <Form onSearch={onSearch} />
      {movies && (
        <ul>
          {movies.map(({ id, original_title, poster_path }) => (
            <MovieCard
              key={id}
              id={id}
              original_title={original_title}
              poster_path={poster_path}
            />
          ))}
        </ul>
      )}
    </>
  );
};
