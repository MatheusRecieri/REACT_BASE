import React from 'react';
import { Router, useNavigate } from 'react-router-dom';

// import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/header';
import AppRoutes from './routes/routes';

function App() {
  const navigate = useNavigate();
  navigate('/');

  return (
    <Router>
      <Header />
      <AppRoutes />
      <GlobalStyles />
    </Router>
  );
}
export default App;
