import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function MyRoute({ component: Component, isClosed }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    console.log('teste');

    return <Navigate to="/login" replace />;
  }

  return <Component />;
}

MyRoute.defaultProps = { isClosed: false };

MyRoute.propTypes = {
  component: PropTypes.element.isRequired,
  isClosed: PropTypes.bool,
};
