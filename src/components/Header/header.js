import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HeaderTitle } from '../../styles/GlobalStyles';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <HeaderTitle>Loja</HeaderTitle>
      <div>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/logOut">
          <FaSignInAlt size={24} />
        </Link>
        <Link to="/login">
          <FaUserAlt size={24} />
        </Link>
      </div>
    </Nav>
  );
}
