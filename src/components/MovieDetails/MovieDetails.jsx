import { Outlet, useParams, useLocation } from 'react-router-dom';
import { movieDetails } from 'servise/api';
import { Suspense, useEffect, useState } from 'react';
import { Container } from '../../pages/Home/Home.styled';
import {
  ToBack,
  Title,
  DetailsContaier,
  MovieInfoList,
  TitleInfo,
  InfoText,
  LinkList,
  LinkItem,
  Photo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    movieDetails(movieId).then(res => setDetails(res));
  }, [movieId]);

  const plugUrl =
    'https://wide-w.com/wp-content/uploads/2018/11/gerb-i-flag-ukrainy-1-1536x1024.jpg';

  const urlBack = location.state?.from ?? '/';

  return (
    <Container>
      <ToBack to={urlBack}>To back</ToBack>
      {details && (
        <>
          <Title>{details.original_title}</Title>
          <DetailsContaier>
            <Photo
              loading="lazy"
              src={
                details.poster_path
                  ? `https://image.tmdb.org/t/p/original${details.poster_path}`
                  : plugUrl
              }
              alt={details.original_title}
            />
            <MovieInfoList>
              <li>
                <TitleInfo>Overview:</TitleInfo>
                <InfoText>{details.overview}</InfoText>
              </li>
              <li>
                <TitleInfo>Release date:</TitleInfo>
                <InfoText>{details.release_date}</InfoText>
              </li>
              <li>
                <TitleInfo>Vote average:</TitleInfo>
                <InfoText>{details.vote_average}</InfoText>
              </li>
            </MovieInfoList>
          </DetailsContaier>
        </>
      )}
      <LinkList>
        <li>
          <LinkItem to="cast" state={{ from: urlBack }}>
            Cast
          </LinkItem>
        </li>
        <li>
          <LinkItem to="reviews" state={{ from: urlBack }}>
            Reviews
          </LinkItem>
        </li>
      </LinkList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
