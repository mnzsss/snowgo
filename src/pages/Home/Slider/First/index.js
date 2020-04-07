import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power3 } from 'gsap';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import Button from '~/styles/components/Button';

import ice from '~/assets/img/slider/ice.svg';
import logo from '~/assets/img/snowgo_light.svg';

import { ImageSlide, Content, Social } from './styles';

export default function First() {
  const { height, width } = useWindowDimensions();

  let image = useRef(null);
  let logoSnow = useRef(null);
  let button = useRef(null);
  let neveDetail = useRef(null);

  const tl = new TimelineLite();

  useEffect(() => {
    tl.from(image, 0.8, {
      y: '-500',
      opacity: 0,
      ease: Power3.easeOut,
    })
      .from(logoSnow, 0.8, { y: '-100', opacity: 0, ease: Power3.easeOut }, 0.4)
      .from(button, 1, { scale: 0, opacity: 0, ease: Power3.easeOut }, 0.4)
      .from(
        neveDetail,
        1,
        { y: '400', scale: 0, opacity: 0, ease: Power3.easeOut },
        1.5
      );
  }, [tl]);

  return (
    <>
      <ImageSlide ref={el => (image = el)} height={height} width={width}>
        <Social>
          <a href="https://www.instagram.com/snowgo.delivery/" target="blank">
            <FaInstagram size="2.5em" className="icon" />
          </a>

          <a href="https://www.facebook.com/snowgo.delivery/" target="blank">
            <FaFacebookSquare size="2.5em" className="icon" />
          </a>
        </Social>
      </ImageSlide>

      <Content>
        <img
          src={logo}
          ref={el => (logoSnow = el)}
          alt="SnowGo - Delivery"
          className="logo"
        />

        <Button href="/sobre" ref={el => (button = el)} color="orange">
          Saiba mais sobre nós
        </Button>

        <img
          src={ice}
          ref={el => (neveDetail = el)}
          alt="Neve"
          className="neve"
        />
      </Content>
    </>
  );
}
