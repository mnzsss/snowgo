import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import cubes from '~/assets/img/carousel/cubes_random.svg';
import cubeOrange from '~/assets/img/carousel/cube_orange.svg';
import cubeBlue from '~/assets/img/carousel/cube_blue.svg';

import truckSchedule from '~/assets/img/slider/entrega_programada.svg';
import truckExpress from '~/assets/img/slider/entrega_express.svg';

import Frase from '~/styles/components/Frase';

import {
  Wrapper,
  Background,
  DeliveryContainer,
  DeliveryType,
  Vantagens,
} from './styles';

export default function Third() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <h1 className="title">dois tipos de entrega</h1>

            <Frase className="frase">o gelo acabou? nós entregamos!</Frase>
          </Col>
          <Col>
            <DeliveryContainer>
              <DeliveryType>
                <img src={truckSchedule} alt="entrega programada" />
                <p>entrega programada</p>

                <Vantagens>
                  <h1>Vantagens</h1>

                  <ul>
                    <li>Ligue e agende sua entrega</li>
                    <li>Entrega na Hora Combinada</li>
                    <li>Mínimo 1 dia antes</li>
                  </ul>
                </Vantagens>
              </DeliveryType>

              <DeliveryType>
                <img src={truckExpress} alt="entrega programada" />
                <p>entrega programada</p>

                <Vantagens>
                  <h1>Vantagens</h1>

                  <ul>
                    <li>Ligue e agende sua entrega</li>
                    <li>Entrega na Hora Combinada</li>
                    <li>Mínimo 1 dia antes</li>
                  </ul>
                </Vantagens>
              </DeliveryType>
            </DeliveryContainer>
          </Col>
        </Row>
      </Container>

      <Background>
        <img src={cubeBlue} alt="Cube" className="cube blue" />
        <img src={cubeOrange} alt="Cube" className="cube orange" />
        <img src={cubes} alt="Cube" className="cube cubes" />
      </Background>
    </Wrapper>
  );
}
