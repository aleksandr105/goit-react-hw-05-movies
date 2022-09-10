import styled from '@emotion/styled';

export const Title = styled.h1`
  text-align: center;
  padding: 30px 0px;
  color: #4d4d4c;
`;

export const MovieList = styled.ul`
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
