import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormSearch = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 420px;
  height: 45px;
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid black;
  overflow: hidden;
  margin: 30px auto 50px auto;
`;

export const ButtonForm = styled.button`
  display: inline-block;
  background-color: silver;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const InputSearch = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
