import React from 'react';

import mission from '~/assets/img/mission.svg';
import vision from '~/assets/img/vision.svg';
import values from '~/assets/img/values.svg';

import { AboutContainer } from './styles';

export default function About() {
  return (
    <AboutContainer fluid="sm">
      <h1>Sobre</h1>

      <p>
        Nascemos através da experiência do Fundador, com o mercado “gelado”. O
        qual tem conhecimento desde o processo de produção até a entrega do
        produto final. Adquiriu essa experiência por meio da administração de:
        fábrica, distribuidora e loja. Nesse meio, notou a inexistência do
        mercado delivery em relação à venda de gelo.
      </p>

      <p>
        Partindo desse princípio, o Fundador idealizou a “SnowGO”. Um conceito
        de DNA inovadora que chegou para facilitar, modernizar e tornar ainda
        mais acessível e rápida a compra do gelo, seja para eventos
        corporativos, aniversários, comemorações, churrascos, ou até mesmo para
        aquele almoço em família. Tudo isso, ainda se torna mais fácil, através
        dos melhores canais de comunicação.
      </p>
      <br />
      <p>
        Nossa empresa, tem o compromisso de realizar entregas eficazes - e com a
        entrega no local combinado - para que o seu evento continue prosperando
        e mantendo suas bebidas em temperatura impecável. Para nós, a felicidade
        e o calor da bebida gelada é o que não pode faltar.
      </p>

      <div>
        <img src={mission} alt="Missão" />

        <p>
          Garantir maior facilidade e agilidade (entrega rápida e impecável)
          para manter os eventos dos nossos clientes com bebidas refrescantes e
          geladas. Tornar a experiência com o cliente satisfatória, em relação a
          qualidade e preço, inspirando momentos de felicidade, amor e otimismo.
        </p>
      </div>

      <div>
        <img src={vision} alt="Visão" />

        <p>
          A “visão” da marca é ampla e pretende atingir os objetivos adaptados
          em diferentes áreas:
          <br /> <br />
          Pessoas: ser um local de trabalho inspirador, onde as pessoas se
          sintam à vontade e entusiasmadas a dar o melhor de si todos os dias.
          <br /> <br />
          Gelos: oferecer um portfólio variado de produtos de qualidade que
          antecipam e satisfaçam os desejos e necessidades dos consumidores.
          <br /> <br />
          Parceiros: desenvolver uma rede de trabalho para criar um valor comum
          e duradouro.
          <br /> <br />
          Planeta: ser uma marca responsável que faz a diferença, se
          comprometendo a ajudar, construir e apoiar comunidades sustentáveis.
          <br /> <br />
          Produtividade: ser uma organização eficaz e dinâmica.
          <br /> <br />
          Propósito: proporcionar agilidade e facilidade aos clientes,
          despreocupando-os com este.
        </p>
      </div>

      <div>
        <img src={values} alt="Valores" />

        <p>
          Guia das ações e do comportamento da SnowGO, são:
          <br /> <br />
          Liderança: se esforça para se moldar a um futuro melhor.
          <br /> <br />
          Colaboração: impulsionar o talento coletivo.
          <br />
          <br />
          Integridade: ser transparente.
          <br />
          <br />
          Prestação de contas: ser responsável.
          <br />
          <br />
          Paixão: estar comprometido com o coração e com a mente.
          <br />
          <br />
          Qualidade: procura pela excelência.
        </p>
      </div>
    </AboutContainer>
  );
}
