import styled from 'styled-components';
import { primaryColor, primaryColor2 } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 4rem;

  a {
    color: #fff;
    margin: 0 0.9rem 0 0;
    font-weight: bold;
    padding: 1.5rem;
  }
  /*
  h1 {
    display: flex;
    position: left;
  } */

  a:hover {
    transition: 0.3s;
    background-color: ${primaryColor2};
  }
`;
