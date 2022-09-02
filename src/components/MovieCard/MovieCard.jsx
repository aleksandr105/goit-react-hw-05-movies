import { Link, useLocation } from 'react-router-dom';

export const MovieCard = ({ original_title, poster_path, id, url }) => {
  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  const plugUrl =
    'https://wide-w.com/wp-content/uploads/2018/11/gerb-i-flag-ukrainy-1-1536x1024.jpg';

  const location = useLocation();

  return (
    <li>
      <Link to={url ? `${url}${id}` : `${id}`} state={{ from: location }}>
        <img
          loading="lazy"
          src={poster_path ? imgUrl : plugUrl}
          alt={original_title}
          width="150px"
        />
        <div>
          <p>{original_title}</p>
        </div>
      </Link>
    </li>
  );
};
