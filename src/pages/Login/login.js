import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

// import axios from '../../services/axios';

//componente
export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Teste</small>
      </Title>
      <Paragrafo>Lorem ipsum dolir sit amet</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
