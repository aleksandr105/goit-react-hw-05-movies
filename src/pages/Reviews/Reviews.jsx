import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'servise/api';
import { Title } from 'pages/Cast/Cast.styled';
import {
  TextHellp,
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsText,
} from './Reviews.styled';

const Reviews = () => {
  const [dataReviews, setDataReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieReviews(movieId).then(res => setDataReviews(res));
  }, [movieId]);

  return (
    <>
      <Title>Reviews</Title>
      {dataReviews && (
        <>
          {dataReviews.results.length === 0 && (
            <TextHellp>There are no reviews yet</TextHellp>
          )}
          <ReviewsList>
            {dataReviews.results.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <ReviewsAuthor>{author}</ReviewsAuthor>
                <ReviewsText>{content}</ReviewsText>
              </ReviewsItem>
            ))}
          </ReviewsList>
        </>
      )}
    </>
  );
};

export default Reviews;
