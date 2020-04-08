import React, { useRef, useEffect } from 'react';
import { TimelineMax } from 'gsap';
import { Container } from 'react-bootstrap';

import cubes from '~/assets/img/carousel/left_cubes.svg';
import cubeOrange from '~/assets/img/carousel/cube_orange.svg';
import cubeBlue from '~/assets/img/carousel/cube_blue.svg';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import { Background } from './styles';
import { Wrapper } from '../styles';

export default function First() {
  let title = useRef(null);
  let frase = useRef(null);
  let button = useRef(null);
  let cubeBlueImg = useRef(null);
  let cubeOrangeImg = useRef(null);
  let cubesImg = useRef(null);

  const tl = new TimelineMax();

  useEffect(() => {
    tl.to([title, frase], 1.5, { opacity: 1, top: '0' })
      .to(button, 0.7, { opacity: 1 }, 1)
      .to(cubeBlueImg, 0.7, { opacity: 1 }, 1.3)
      .to(cubeOrangeImg, 0.7, { opacity: 1 }, 1.3)
      .to(cubesImg, 1.2, { opacity: 1 }, 1.3);
  }, [tl]);

  return (
    <Wrapper>
      <Container>
        <h1
          ref={el => (title = el)}
          style={{ opacity: 0, position: 'relative', bottom: '2em' }}
        >
          O Único delivery focado em gelo
        </h1>

        <Frase
          ref={el => (frase = el)}
          style={{ opacity: 0, position: 'relative', bottom: '2em' }}
        >
          vê se não esquenta!
        </Frase>

        <Button
          ref={el => (button = el)}
          style={{ opacity: 0 }}
          href="/entrega-programada"
        >
          programe sua entrega
        </Button>
      </Container>

      <Background>
        <img
          ref={el => (cubeBlueImg = el)}
          style={{ opacity: 0 }}
          src={cubeBlue}
          alt="Cube"
          className="cube blue"
        />
        <img
          ref={el => (cubeOrangeImg = el)}
          style={{ opacity: 0 }}
          src={cubeOrange}
          alt="Cube"
          className="cube orange"
        />
        <img
          ref={el => (cubesImg = el)}
          style={{ opacity: 0 }}
          src={cubes}
          alt="Cube"
          className="cube cubes"
        />
      </Background>
    </Wrapper>
  );
}
