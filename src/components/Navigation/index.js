import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import { MenuLinks, Wrapper } from './styles';

import Home from '../Menu/Icons/Home';
import Schedule from '../Menu/Icons/Schedule';
import Express from '../Menu/Icons/Express';
import Contact from '../Menu/Icons/Contact';
import About from '~/assets/img/menu/about.svg';

import Bucket from '~/components/Bucket';
import logo from '~/assets/img/snowgo_light.svg';

export default function Navigation() {
  const { width } = useWindowDimensions();
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src={logo} alt="SnowGo - Gelo Delivery" />
        </Link>

        <MenuLinks>
          <NavLink activeClassName="active" to="/" exact>
            <Home />
            Inicio
          </NavLink>
          <NavLink activeClassName="active" to="/entrega-programada">
            <Schedule />
            Entrega Programada
          </NavLink>
          <NavLink activeClassName="active" to="/entrega-express">
            <Express />
            Entrega Express
          </NavLink>
          <NavLink activeClassName="active" to="/sobre">
            <img src={About} alt="Sobre" />
            Sobre
          </NavLink>
          <NavLink activeClassName="active" to="/contato">
            <Contact />
            Contato
          </NavLink>
        </MenuLinks>

        <Bucket
          className="bucket"
          target="_blank"
          link="https://api.whatsapp.com/send?phone=5511945592940"
        >
          {width > 1200 ? 'Peça Agora' : null}
        </Bucket>
      </Container>
    </Wrapper>
  );
}
