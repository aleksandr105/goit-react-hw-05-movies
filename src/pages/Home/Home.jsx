import { MovieCard } from 'components/MovieCard/MovieCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { popularMovies } from 'servise/api';

export const Home = () => {
  const [movies, setMovies] = useState(null);
  const url = 'movies/';

  useEffect(() => {
    popularMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <>
      <h1>Popular films of the day</h1>
      {movies && (
        <ul>
          {movies.map(({ id, original_title, poster_path }) => (
            <MovieCard
              url={url}
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
