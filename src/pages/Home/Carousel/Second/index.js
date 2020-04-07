import React from 'react';

import { Container } from 'react-bootstrap';

import cubes from '~/assets/img/carousel/cubes_danger.svg';
import cubeOrange from '~/assets/img/carousel/cube_orange.svg';
import dangerOrange from '~/assets/img/carousel/danger_orange.svg';

import Frase from '~/styles/components/Frase';

import { Background } from './styles';
import { Wrapper } from '../styles';

export default function Second() {
  return (
    <Wrapper>
      <Container>
        <h1>festa com cerveja trincando!</h1>

        <Frase>não trabalhamos com gelo seco</Frase>
      </Container>

      <Background>
        <img src={dangerOrange} alt="Cube" className="cube blue" />
        <img src={cubeOrange} alt="Cube" className="cube orange" />
        <img src={cubes} alt="Cube" className="cube cubes" />
      </Background>
    </Wrapper>
  );
}
