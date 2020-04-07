import React, { useState } from 'react';

import { FaRegCalendarAlt } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import Products from './Products';

import Frase from '~/styles/components/Frase';
import Button from '~/styles/components/Button';

import truckSchedule from '~/assets/img/entrega_programada_line.svg';
import schedule from '~/assets/img/schedule.svg';

import { Content, Vantagens } from './styles';

export default function Schedule() {
  const [products, setProducts] = useState(false);
  const { width, height } = useWindowDimensions();

  function handleToggleProducts() {
    setProducts(!products);
  }

  return (
    <>
      <Container fluid="sm">
        <Content>
          <header>
            <h1>entrega programada</h1>
            <img src={truckSchedule} alt="entrega programada" />
          </header>

          <Frase className="frase">para o gelo não derreter no caminho!</Frase>

          <p>
            Planeje seu evento com os amigos e não esqueça da cerveja geladinha,
            garanta sua festa perfeita.
          </p>

          <Vantagens>
            <div className="vantagem">
              <img src={schedule} alt="Mínimo 1 dia Antes" />
              <p>Mínimo 1 dia Antes</p>
            </div>

            <div className="vantagem">
              <FaRegCalendarAlt
                color="#505050"
                size={width >= 768 ? 100 : '3.3em'}
              />
              <p>Agende o dia da Festa</p>
            </div>
          </Vantagens>
          <div className="action">
            <Button onClick={handleToggleProducts}>lista de produtos</Button>
          </div>
        </Content>
      </Container>

      {products && (
        <Products close={handleToggleProducts} width={width} height={height} />
      )}
    </>
  );
}
