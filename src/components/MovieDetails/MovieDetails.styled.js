import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const ToBack = styled(Link)`
  color: white;
  text-align: center;
  display: block;
  margin: 30px 0;
  font-weight: 600;
  background-color: blue;
  border-radius: 5px;
  padding: 8px 10px;
  width: 110px;
  :hover {
    color: tomato;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  color: tomato;
`;

export const DetailsContaier = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Photo = styled.img`
  width: 350px;
  border-radius: 10px;
`;

export const MovieInfoList = styled.ul`
  padding: 30px;
  max-width: 500px;
  li:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const TitleInfo = styled.h3`
  margin-bottom: 10px;
  color: tomato;
`;

export const InfoText = styled.p`
  font-weight: 500;
  color: black;
`;

export const LinkList = styled.ul`
  display: flex;
  padding: 25px 100px;
  background-color: silver;
  width: 350px;
  border-radius: 10px;
  margin-top: 15px;
  li:not(:last-child) {
    margin-right: 40px;
  }
`;

export const LinkItem = styled(NavLink)`
  color: blue;
  padding: 15px 5px;
  font-weight: 700;

  &.active {
    color: yellow;
  }
`;
