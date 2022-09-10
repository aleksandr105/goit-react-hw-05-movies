import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'servise/api';

const Reviews = () => {
  const [dataReviews, setDataReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieReviews(movieId).then(res => setDataReviews(res));
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      {dataReviews && (
        <>
          {dataReviews.results.length === 0 && (
            <h3>There are no reviews yet</h3>
          )}
          <ul>
            {dataReviews.results.map(({ id, author, content }) => (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Reviews;
