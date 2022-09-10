import { useEffect, useState } from 'react';
import { movieCredits } from 'servise/api';
import { useParams } from 'react-router-dom';
import { Title } from './Cast.styled';
import { TextHellp } from 'pages/Reviews/Reviews.styled';
import {
  Container,
  CastList,
  CastItem,
  CastPhoto,
  CastTitle,
  CastText,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [dataCast, setDataCast] = useState(null);

  useEffect(() => {
    movieCredits(movieId).then(res => setDataCast(res));
  }, [movieId]);

  const plugUrl =
    'https://wide-w.com/wp-content/uploads/2018/11/gerb-i-flag-ukrainy-1-1536x1024.jpg';

  return (
    <Container>
      <Title>Cast</Title>
      {dataCast?.cast.length === 0 && (
        <TextHellp>Sorry no photos of the cast</TextHellp>
      )}

      {dataCast && dataCast.cast.length !== 0 && (
        <CastList>
          {dataCast.cast.map(({ cast_id, original_name, profile_path }) => (
            <CastItem key={cast_id}>
              <CastPhoto
                loading="lazy"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : plugUrl
                }
                alt={original_name}
              />
              <CastTitle>
                <CastText>{original_name}</CastText>
              </CastTitle>
            </CastItem>
          ))}
        </CastList>
      )}
    </Container>
  );
};

export default Cast;
