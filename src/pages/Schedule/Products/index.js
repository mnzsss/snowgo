import React from 'react';
import { FaCaretLeft } from 'react-icons/fa';

import times from '~/assets/img/times.svg';

import { ContainerProducts, Close } from './styles';

export default function Products({ close, width, height }) {
  return (
    <ContainerProducts fluid="sm" width={width} height={height}>
      <Close onClick={close}>
        <FaCaretLeft size="2em" />
        <span>voltar</span>
      </Close>

      <h1>lista de produtos</h1>

      <ul>
        <li>
          <p>Copo de Gelo de 500ml</p>
          <span>200g</span>
        </li>
        <li>
          <p>Gelo de água de coco</p>
          <span>600ml</span>
        </li>
        <li>
          <p>Gelo Bolas Cristalinas</p>
          <span>250g</span>
        </li>
        <li>
          <p>Gelo em Cubo</p>
          <span>2kg</span>
        </li>
        <li>
          <p>Gelo em Cubo</p>
          <span>5kg</span>
        </li>
        <li>
          <p>Gelo Britado</p>
          <span>10kg</span>
        </li>
        <li>
          <p>Gelo Times de Futebol (em cubo)</p>
          <span>5kg</span>
        </li>
        <li>
          <img src={times} alt="Times" />
        </li>
      </ul>
    </ContainerProducts>
  );
}
