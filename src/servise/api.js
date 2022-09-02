const URL = 'https://api.themoviedb.org';
const KEY = 'fd1285083725fb4593534aa358f84334';

export const popularMovies = async () => {
  const response = await fetch(`${URL}/3/trending/movie/day?api_key=${KEY}`);

  const dataSearch = await response.json();

  return dataSearch;
};

export const searchMovies = async query => {
  const response = await fetch(
    `${URL}/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  const dataSearch = await response.json();
  return dataSearch;
};

export const movieDetails = async id => {
  const response = await fetch(
    `${URL}/3/movie/${id}?api_key=${KEY}&language=en-US`
  );

  const dataSearch = await response.json();
  return dataSearch;
};

export const movieCredits = async id => {
  const response = await fetch(
    `${URL}/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );

  const dataSearch = await response.json();
  return dataSearch;
};

export const movieReviews = async id => {
  const response = await fetch(
    `${URL}/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );

  const dataSearch = await response.json();
  return dataSearch;
};
