import {
  NavLink,
  Outlet,
  useParams,
  Link,
  useLocation,
} from 'react-router-dom';
import { movieDetails } from 'servise/api';
import { useEffect, useState } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    movieDetails(movieId).then(res => setDetails(res));
  }, [movieId]);

  const plugUrl =
    'https://wide-w.com/wp-content/uploads/2018/11/gerb-i-flag-ukrainy-1-1536x1024.jpg';

  const urlBack = location.state?.from ?? '/goit-react-hw-05-movies';

  return (
    <>
      <Link to={urlBack}>To back</Link>
      {details && (
        <>
          <h2>{details.original_title}</h2>
          <div>
            <img
              loading="lazy"
              src={
                details.poster_path
                  ? `https://image.tmdb.org/t/p/original${details.poster_path}`
                  : plugUrl
              }
              alt={details.original_title}
              width="350px"
            />
            <h3>Overview:</h3>
            <p>{details.overview}</p>
            <h3>Release date:</h3>
            <p>{details.release_date}</p>
            <h3>Vote average:</h3>
            <p>{details.vote_average}</p>
          </div>
        </>
      )}
      <ul>
        <li>
          <NavLink to="cast" state={{ from: urlBack }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: urlBack }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
