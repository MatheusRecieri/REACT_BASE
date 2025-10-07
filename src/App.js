// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/header';
import AppRoutes from './routes/routes';

function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/');
  // }, [navigate]);

  return (
    <>
      <Header />
      <AppRoutes />
      <GlobalStyles />
    </>
  );
}
export default App;
