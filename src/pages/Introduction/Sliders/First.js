import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power3 } from 'gsap';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import cube from '~/assets/img/slider/cube.svg';
import cube2 from '~/assets/img/slider/cube_2.svg';
import cube3 from '~/assets/img/slider/cube_3.svg';

import { Container, Elements } from './styles';

export default function First() {
  let title = useRef(null);
  let frase = useRef(null);
  let cubeTopBlue = useRef(null);
  let cubeTopOrange = useRef(null);
  let cubeBottomBlue = useRef(null);
  let button = useRef(null);

  const tl = new TimelineLite();

  useEffect(() => {
    tl.from(
      title,
      1,
      {
        y: '-600',
        opacity: 0,
        ease: Power3.easeOut,
      },
      0.4
    )
      .from(cubeTopBlue, 1, { x: '-50', opacity: 0, ease: Power3.easeOut }, 0.8)
      .from(frase, 1, { y: '50', opacity: 0, ease: Power3.easeOut }, 1)
      .from(button, 0.5, { y: '-50', opacity: 0, ease: Power3.easeOut }, 1.1)
      .from(
        [cubeTopOrange, cubeBottomBlue],
        1,
        { x: '50', opacity: 0, ease: Power3.easeOut },
        1.3
      );
  }, [tl]);

  return (
    <Container>
      <div className="crop">
        <h1 ref={el => (title = el)}>O Unico delivery focado em gelo</h1>
      </div>

      <Frase ref={el => (frase = el)}>vê se não esquenta!</Frase>

      <Button ref={el => (button = el)} color="orange">
        programe sua entrega
      </Button>

      <Elements>
        <img
          ref={el => (cubeTopBlue = el)}
          src={cube}
          alt="Cube"
          className="element"
        />
        <img
          ref={el => (cubeTopOrange = el)}
          src={cube2}
          alt="Cube"
          className="element cube2"
        />
        <img
          ref={el => (cubeBottomBlue = el)}
          src={cube3}
          alt="Cube"
          className="element cube3"
        />
      </Elements>
    </Container>
  );
}
