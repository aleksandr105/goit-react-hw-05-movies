import styled from '@emotion/styled';

export const MovieItem = styled.li`
  :hover {
    transform: scale(1.03);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: zoom-in;
  }
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: #b7b7b7;
`;

export const MovieItemPhoto = styled.img`
  width: 100%;
  min-height: 550px;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  padding: 20px;
  background-color: #b7b7b7;
  text-align: center;
`;

export const TitleText = styled.p`
  color: black;
  font-weight: 700;
  font-size: 20px;
`;
