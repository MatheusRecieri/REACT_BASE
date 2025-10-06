import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/login';
import NotFound from '../pages/NotFound/notFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
