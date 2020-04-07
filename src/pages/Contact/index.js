import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import phone from '~/assets/img/phone_line.svg';
import photo from '~/assets/img/pessoas_festa_gelo.png';

import Frase from '~/styles/components/Frase';

import { ContainerContact } from './styles';

export default function Contact() {
  const { width } = useWindowDimensions();

  return (
    <ContainerContact fluid={width > 825}>
      {width < 825 ? (
        <>
          <h1>Contato</h1>
          <img src={phone} alt="Contato" className="phone" />

          <ul>
            <li>
              <span>Telefones</span>
            </li>
            <li>
              <FaPhone color="#505050" size={16} />

              <a href="tel:2508-3530" target="blank">
                <small>(11)</small> 2508-3530
              </a>
            </li>
            <li>
              <FaWhatsapp color="#505050" size={16} />

              <a
                href="https://api.whatsapp.com/send?phone=5511945592940"
                target="blank"
              >
                <small>(11)</small> 94559-2940
              </a>
            </li>
          </ul>

          <div className="loja">
            <ul>
              <li>
                <span>Loja Ibirapuera</span>
              </li>
              <li>
                <p>
                  Rua Tangara, 137 <small>- Vila Mariana</small>
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <span>Horário de Funcionamento</span>
              </li>
              <li>
                <p>
                  Segunda: <small>Fechado</small>
                </p>
              </li>
              <li>
                <p>
                  Terça:<small> 09 às 17</small>
                </p>
              </li>
              <li>
                <p>
                  Quarta:<small> 09 às 18</small>
                </p>
              </li>
              <li>
                <p>
                  Quinta:<small> 08 às 18</small>
                </p>
              </li>
              <li>
                <p>
                  Sexta:<small> 08 às 20</small>
                </p>
              </li>
              <li>
                <p>
                  Sábado:<small> 08 às 20</small>
                </p>
              </li>
              <li>
                <p>
                  Domingo:<small> 09 às 13</small>
                </p>
              </li>
            </ul>
          </div>

          <div className="loja">
            <ul>
              <li>
                <span>Loja Pinheiros</span>
              </li>
              <li>
                <p>
                  Rua Ferreira de Araújo, 877 <small>- Pinheiros</small>
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <span>Horário de Funcionamento</span>
              </li>
              <li>
                <p>
                  Segunda: <small>10 às 17</small>
                </p>
              </li>
              <li>
                <p>
                  Terça:<small> 09 às 17</small>
                </p>
              </li>
              <li>
                <p>
                  Quarta:<small> 08 às 18</small>
                </p>
              </li>
              <li>
                <p>
                  Quinta:<small> 08 às 19</small>
                </p>
              </li>
              <li>
                <p>
                  Sexta:<small> 08 às 20</small>
                </p>
              </li>
              <li>
                <p>
                  Sábado:<small> 08 às 20</small>
                </p>
              </li>
              <li>
                <p>
                  Domingo:<small> 09 às 17</small>
                </p>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Row className="desktop">
          <Col>
            <Image src={photo} fluid />
          </Col>

          <Col className="infos">
            <h1>O Único delivery focado em gelo</h1>
            <Frase>vê se não esquenta!</Frase>

            <ul>
              <li>
                <span>Telefones</span>
              </li>
              <li>
                <FaPhone color="#27BDBE" size={16} />

                <a href="tel:2508-3530" target="blank">
                  <small>(11)</small> 2508-3530
                </a>
              </li>
              <li>
                <FaWhatsapp color="#27BDBE" size={16} />

                <a
                  href="https://api.whatsapp.com/send?phone=5511945592940"
                  target="blank"
                >
                  <small>(11)</small> 94559-2940
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      )}
    </ContainerContact>
  );
}
