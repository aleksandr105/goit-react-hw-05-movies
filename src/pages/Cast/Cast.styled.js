import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  margin: 25px 0px;
  color: tomato;
  font-weight: 700;
`;

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 50px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const CastItem = styled.li`
  border-radius: 4px;
  overflow: hidden;
  background-color: #b7b7b7;
`;

export const CastPhoto = styled.img`
  width: 100%;
  min-height: 550px;
  object-fit: cover;
`;

export const CastTitle = styled.div`
  padding: 20px;
  background-color: #b7b7b7;
  text-align: center;
`;

export const CastText = styled.p`
  color: black;
  font-weight: 700;
  font-size: 20px;
`;
