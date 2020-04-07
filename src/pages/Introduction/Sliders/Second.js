import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power3 } from 'gsap';

import Frase from '~/styles/components/Frase';

import cube from '~/assets/img/slider/cube.svg';
import cube3 from '~/assets/img/slider/cube_3.svg';
import danger from '~/assets/img/slider/danger.svg';

import { Container, Elements } from './styles';

export default function Second() {
  let title = useRef(null);
  let frase = useRef(null);
  let cubeTopBlue = useRef(null);
  let dangerBottom = useRef(null);
  let dangerTop = useRef(null);
  let cubeBottomBlue = useRef(null);

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
      .from(
        [cubeTopBlue, dangerBottom],
        1,
        { x: '-50', opacity: 0, ease: Power3.easeOut },
        0.8
      )
      .from(frase, 1, { y: '50', opacity: 0, ease: Power3.easeOut }, 1)
      .from(
        [dangerTop, cubeBottomBlue],
        1,
        { x: '50', opacity: 0, ease: Power3.easeOut },
        1.3
      );
  }, [tl]);

  return (
    <Container>
      <div className="crop">
        <h1 ref={el => (title = el)} style={{ marginTop: 50 }}>
          festa com cerveja trincando!
        </h1>
      </div>

      <Frase ref={el => (frase = el)} style={{ fontSize: 40, marginTop: 30 }}>
        não trabalhamos com gelo seco
      </Frase>

      <Elements>
        <img
          ref={el => (cubeTopBlue = el)}
          src={cube}
          alt="Cube"
          className="element"
          style={{ transform: 'rotate(-180deg)', left: '-3em' }}
        />
        <img
          ref={el => (dangerTop = el)}
          src={danger}
          alt="Danger"
          className="element danger"
        />
        <img
          ref={el => (dangerBottom = el)}
          src={danger}
          alt="Danger"
          className="element danger2"
        />
        <img
          ref={el => (cubeBottomBlue = el)}
          src={cube3}
          alt="Cube"
          className="element cube3"
          style={{ top: '35em', width: '30%' }}
        />
      </Elements>
    </Container>
  );
}
