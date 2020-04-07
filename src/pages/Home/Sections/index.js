import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import Bucket from '~/components/Bucket';
import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import { CallContainer, DeliveryTypes, GeloContainer } from './styles';

import callImage from '~/assets/img/pessoas_festa_gelo.png';
import geloImage from '~/assets/img/cerveja_gelo.jpg';
import ice from '~/assets/img/slider/ice.svg';
import enao from '~/assets/img/enao.svg';
import expressIcon from '~/assets/img/entrega_express_line.svg';
import scheduleIcon from '~/assets/img/entrega_programada_line.svg';

export default function Sections() {
  return (
    <>
      <CallContainer fluid>
        <Row>
          <Col md={6}>
            <Image src={callImage} alt="pessoas_festa_gelo" fluid />

            <Bucket
              className="bucket"
              link="https://api.whatsapp.com/send?phone=5511945592940"
              target="blank"
            >
              Peça Agora
            </Bucket>
          </Col>
          <Col>
            <div className="content">
              <h2>Se acabar o gelo, a festa Já ERA?</h2>
              <Image fluid src={enao} alt="éééé não" />
            </div>
          </Col>
          <Col md={2}>
            <Image src={ice} alt="Neve" className="neve" />
          </Col>
        </Row>
      </CallContainer>

      <DeliveryTypes fluid>
        <Row>
          <Col className="title">
            <Button>dois tipos de entrega</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="type">
              <Image src={expressIcon} alt="Entrega Express" />

              <div className="content">
                <h2>Entrega Express</h2>

                <Frase className="frase">
                  não esquenta nós entregamos para você!
                </Frase>

                <p>
                  Temos entregas imediatas*, você pode contar com atendimento
                  rápido para salvar o seu evento.
                </p>

                <Button href="/entrega-express" color="purple">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </Col>

          <Col>
            <div className="type">
              <div className="content">
                <h2>Entrega Programada</h2>

                <Frase className="frase">
                  para o gelo não derreter no caminho!
                </Frase>

                <p>
                  Planeje seu evento com os amigos e não esqueça da cerveja
                  geladinha, garanta sua festa perfeita.
                </p>

                <Button href="/entrega-programada" color="purple">
                  Saiba Mais
                </Button>
              </div>

              <Image
                src={scheduleIcon}
                alt="Entrega Programada"
                className="schedule"
              />
            </div>
          </Col>
        </Row>
      </DeliveryTypes>

      <GeloContainer fluid>
        <Row>
          <Col md={6}>
            <div className="content">
              <h3>festa com cerveja trincando!</h3>

              <p className="tag">NÃo trabalhamos com gelo seco</p>
            </div>
          </Col>

          <Col md={6}>
            <Image src={geloImage} fluid />
          </Col>
        </Row>
      </GeloContainer>
    </>
  );
}
