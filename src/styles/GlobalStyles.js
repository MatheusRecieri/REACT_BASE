import styled, { createGlobalStyle } from 'styled-components';
import { primaryDarkColor, primaryColor } from '../config/colors';

export default createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
 }

 body {
  font-family: sans-serif;
  background-color: ${primaryDarkColor};
  color: ${primaryColor}
 }

 html, body, #root {
  height: 100%;
 }

 button {
  cursor: pointer;
  background: ${primaryColor};
  padding: 10px 20px;
  border: none;
  color: #fff;
  border-radius: 4px;
  font-weight: 700;
 }

 a {
  text-decoration: none;
  color: #fff;
 }

 ul {
  list-style: none;
 }

`;

export const Container = styled.section`
  max-width: 360px;
  background: #ffffffff;
  margin: 30px auto;
  padding: 1.4rem;
  border-radius: 0.4rem;
  /* display: flex; */
  text-align: center;
  color: black;
`;
