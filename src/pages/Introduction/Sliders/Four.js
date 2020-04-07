import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power3 } from 'gsap';

import Frase from '~/styles/components/Frase';
import Bucket from '~/components/Bucket';

import phone from '~/assets/img/phone_line.svg';

import { Container, Elements } from './styles';

export default function Four() {
  let title = useRef(null);
  let frase = useRef(null);
  let phoneIcon = useRef(null);
  let bucket = useRef(null);

  const tl = new TimelineLite();

  useEffect(() => {
    tl.from(
      [title, phoneIcon],
      1,
      {
        y: '-10',
        opacity: 0,
        ease: Power3.easeOut,
      },
      0.5
    )
      .from(bucket, 1, { y: '50', opacity: 0, ease: Power3.easeOut }, 1)
      .from(frase, 1, { y: '50', opacity: 0, ease: Power3.easeOut }, 2);
  }, [tl]);

  return (
    <Container>
      <h1
        ref={el => (title = el)}
        style={{ fontSize: 48, lineHeight: '46px', marginTop: 70 }}
      >
        Facilidade em fazer seu pedido
      </h1>

      <div ref={el => (bucket = el)}>
        <Bucket link="https://api.whatsapp.com/send?phone=5511945592940">
          peça agora por telefone ou whatsapp
        </Bucket>
      </div>

      <Frase ref={el => (frase = el)} style={{ fontSize: 53 }}>
        para a festa não acabar!
      </Frase>

      <Elements>
        <img
          ref={el => (phoneIcon = el)}
          src={phone}
          alt="Phone"
          className="element"
          style={{
            left: 'auto',
            right: '-3.5em',
            top: '14em',
            transform: 'rotate(-20deg)',
          }}
        />
      </Elements>
    </Container>
  );
}
