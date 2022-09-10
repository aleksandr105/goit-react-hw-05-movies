import { Link, useLocation } from 'react-router-dom';
import {
  MovieItem,
  MovieItemPhoto,
  TitleContainer,
  TitleText,
} from './MovieCard.styled';

export const MovieCard = ({ original_title, poster_path, id, url }) => {
  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  const plugUrl =
    'https://wide-w.com/wp-content/uploads/2018/11/gerb-i-flag-ukrainy-1-1536x1024.jpg';

  const location = useLocation();

  return (
    <MovieItem>
      <Link to={url ? `${url}${id}` : `${id}`} state={{ from: location }}>
        <MovieItemPhoto
          loading="lazy"
          src={poster_path ? imgUrl : plugUrl}
          alt={original_title}
        />
        <TitleContainer>
          <TitleText>{original_title}</TitleText>
        </TitleContainer>
      </Link>
    </MovieItem>
  );
};
