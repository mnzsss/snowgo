import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import Button from '~/styles/components/Button';
import Container from '~/styles/components/Container';

import ice from '~/assets/img/slider/ice.svg';
import enao from '~/assets/img/slider/e_nao.svg';
import logo from '~/assets/img/snowgo_light.svg';

import { Header, Content, Social } from './styles';

export default function Second() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="SnowGo - Delivery" className="logo" />

        <Social>
          <a href="https://www.instagram.com/snowgo.delivery/" target="blank">
            <FaInstagram size="2.5em" className="icon" />
          </a>

          <a href="https://www.facebook.com/snowgo.delivery/" target="blank">
            <FaFacebookSquare size="2.5em" className="icon" />
          </a>
        </Social>
      </Header>

      <Content>
        <h1>Se acabar o gelo, a festa JA ERA?</h1>

        <img src={enao} alt="éééé não" className="nao" />

        <Button href="/sobre" color="orange">
          Saiba mais sobre nós
        </Button>

        <img src={ice} alt="Neve" className="neve" />
      </Content>
    </Container>
  );
}
