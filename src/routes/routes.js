import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login/login';
import NotFound from '../pages/NotFound/notFound';
import Home from '../pages/Home/home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<MyRoute component={Login} isClosed />} />
    </Routes>
  );
}
