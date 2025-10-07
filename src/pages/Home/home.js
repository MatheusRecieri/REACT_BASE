import React from 'react';
import { Paragrafo } from '../Login/styled';
import { Container } from '../../styles/GlobalStyles';

export default function Home() {
  return (
    <Container>
      <h1>Teste Pagina home</h1>
      <Paragrafo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        porttitor, tortor et posuere interdum, ante orci cursus velit, in ornare
        ligula odio id nunc. Phasellus sodales scelerisque velit, id maximus
        turpis scelerisque nec. Mauris ultricies varius felis, vitae consectetur
        dolor scelerisque ac. Aliquam erat volutpat. Duis laoreet lacus at dui
        dignissim commodo. Maecenas vehicula sollicitudin est at tristique. Cras
        congue vehicula ullamcorper. Sed luctus lorem nec arcu semper, convallis
        imperdiet quam ullamcorper. Fusce ornare massa eu elit vehicula, eget
        molestie augue ornare. Morbi luctus nibh sem, non faucibus tortor
        tincidunt et.
      </Paragrafo>
    </Container>
  );
}
