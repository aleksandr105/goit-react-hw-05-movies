import { useEffect, useState } from 'react';
import { movieCredits } from 'servise/api';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [dataCast, setDataCast] = useState(null);

  useEffect(() => {
    movieCredits(movieId).then(res => setDataCast(res));
  }, [movieId]);

  const plugUrl =
    'https://wide-w.com/wp-content/uploads/2018/11/gerb-i-flag-ukrainy-1-1536x1024.jpg';

  return (
    <>
      <h2>Cast</h2>
      {dataCast && (
        <ul>
          {dataCast.cast.map(({ id, original_name, profile_path }) => (
            <li key={id}>
              <img
                loading="lazy"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : plugUrl
                }
                alt={original_name}
                width="350px"
              />
              <p>{original_name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
