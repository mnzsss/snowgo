import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power3 } from 'gsap';
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

  const tl = new TimelineLite();

  useEffect(() => {
    tl.from(title, 1, { y: '-100', opacity: 0, ease: Power3.easeOut })
      .from(frase, 1, { y: '100', opacity: 0, ease: Power3.easeOut }, 0.4)
      .from(button, 0.7, { x: '-100', opacity: 0, ease: Power3.easeOut }, 0.6)
      .from(
        cubeBlueImg,
        0.7,
        { x: '-50', opacity: 0, ease: Power3.easeOut },
        0.6
      )
      .from(
        cubeOrangeImg,
        0.7,
        { x: '-50', opacity: 0, ease: Power3.easeOut },
        0.6
      )
      .from(cubesImg, 1.2, { x: '400', opacity: 0, ease: Power3.easeOut }, 0.6);
  }, [tl]);

  return (
    <Wrapper>
      <Container>
        <h1 ref={el => (title = el)}>O Único delivery focado em gelo</h1>

        <Frase ref={el => (frase = el)}>vê se não esquenta!</Frase>

        <Button ref={el => (button = el)} href="/entrega-programada">
          programe sua entrega
        </Button>
      </Container>

      <Background>
        <img
          ref={el => (cubeBlueImg = el)}
          src={cubeBlue}
          alt="Cube"
          className="cube blue"
        />
        <img
          ref={el => (cubeOrangeImg = el)}
          src={cubeOrange}
          alt="Cube"
          className="cube orange"
        />
        <img
          ref={el => (cubesImg = el)}
          src={cubes}
          alt="Cube"
          className="cube cubes"
        />
      </Background>
    </Wrapper>
  );
}
