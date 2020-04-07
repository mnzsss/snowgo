import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import footerProducts from '~/assets/img/products_footer.png';
import footerProductsDesktop from '~/assets/img/footer_programada.png';

import variables from '~/styles/variables';

export const ContainerProducts = styled(Container)`
  position: absolute;
  top: 0;
  z-index: 999;
  background-color: ${variables.colors.white};
  color: ${variables.colors.darkgray};
  width: ${props => props.width}px;
  background-image: url(${footerProducts});
  background-position: center 43em;
  background-size: 100%;
  background-repeat: no-repeat;
  padding-bottom: 300px;
  min-height: ${props => props.height}px;

  h1 {
    color: ${variables.colors.primary};
    font-size: 30px;
    margin-top: 30px;
    text-align: center;
  }

  ul {
    list-style: none;
    margin-top: 30px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 900;
      font-family: ${variables.fonts.paragraph};

      & + li {
        margin-top: 20px;
      }

      span {
        color: ${variables.colors.orange};
      }
    }
  }

  @media (min-width: 825px) {
    position: relative;
    background-color: transparent;
    background-position: center bottom;
    background-image: url(${footerProductsDesktop});
    padding-bottom: 100px;
  }
`;

export const Close = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-weight: 900;
    text-transform: uppercase;
    font-size: 16px;
  }

  @media (min-width: 825px) {
    display: none;
  }
`;

export const Footer = styled.div`
  height: 250px;
`;
