import { MovieCard } from 'components/MovieCard/MovieCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { popularMovies } from 'servise/api';
import { Title, MovieList, Container } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const url = 'movies/';

  useEffect(() => {
    popularMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <>
      <Title>Popular films of the day</Title>
      {movies && (
        <Container>
          <MovieList>
            {movies.map(({ id, original_title, poster_path }) => (
              <MovieCard
                url={url}
                key={id}
                id={id}
                original_title={original_title}
                poster_path={poster_path}
              />
            ))}
          </MovieList>
        </Container>
      )}
    </>
  );
};

export default Home;
