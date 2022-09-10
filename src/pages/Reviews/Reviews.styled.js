import styled from '@emotion/styled';

export const TextHellp = styled.h3`
  text-align: center;
  padding-bottom: 70px;
  font-size: 25px;
`;

export const ReviewsList = styled.ul`
  padding-bottom: 80px;
  li:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ReviewsItem = styled.li`
  background-color: silver;
  border-radius: 10px;
  padding: 20px;
`;

export const ReviewsAuthor = styled.h3`
  margin-bottom: 10px;
  color: tomato;
`;

export const ReviewsText = styled.p`
  color: black;
  font-weight: 600;
`;
