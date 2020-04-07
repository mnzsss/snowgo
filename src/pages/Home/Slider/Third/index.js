import React from 'react';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import ice from '~/assets/img/slider/ice.svg';

import { ImageSlide, Social, Bar, Content } from './styles';

export default function Third() {
  const { height } = useWindowDimensions();

  return (
    <>
      <ImageSlide height={height}>
        <Social>
          <a href="https://www.instagram.com/snowgo.delivery/" target="blank">
            <FaInstagram size="2.5em" className="icon" />
          </a>

          <a href="https://www.facebook.com/snowgo.delivery/" target="blank">
            <FaFacebookSquare size="2.5em" className="icon" />
          </a>
        </Social>

        <Bar>Não trabalhamos com gelo seco</Bar>
      </ImageSlide>

      <Content>
        <h1>festa com cerveja trincando!</h1>

        <img src={ice} alt="Neve" className="neve" />
      </Content>
    </>
  );
}
