import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power3 } from 'gsap';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import { BarContainer, Social } from './styles';

import logo from '~/assets/img/snowgo.svg';

export default function Bar() {
  let content = useRef(null);

  const tl = new TimelineLite();

  useEffect(() => {
    tl.from(content, 1, { y: -100, ease: Power3.easeOut });
  }, [tl]);

  return (
    <BarContainer ref={el => (content = el)}>
      <img src={logo} alt="SnowGo - Gelo Delivery" />

      <Social>
        <a href="https://www.instagram.com/snowgo.delivery/" target="blank">
          <FaInstagram size="2.5em" className="icon" />
        </a>

        <a href="https://www.facebook.com/snowgo.delivery/" target="blank">
          <FaFacebookSquare size="2.5em" className="icon" />
        </a>
      </Social>
    </BarContainer>
  );
}
