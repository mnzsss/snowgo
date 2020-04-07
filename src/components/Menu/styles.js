import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { transparentize } from 'polished';

import variables from '~/styles/variables';
import Container from '~/styles/components/Container';

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 998;
  width: ${props => props.width}px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: ${variables.colors.purple};
  padding-bottom: 0;
  padding-top: 0;

  .active {
    color: ${variables.colors.orange};
    box-sizing: border-box;
    border-bottom: 5px solid ${variables.colors.orange};
    transition: all ease 0.3s;

    svg {
      fill: ${variables.colors.orange};
    }

    &:hover {
      color: ${variables.colors.white};

      svg {
        fill: ${variables.colors.white};
      }
    }
  }
`;

export const Item = styled(NavLink)`
  color: ${variables.colors.white};
  font-size: 9px;
  transition: all ease 0.3s;
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  svg {
    margin-bottom: 0.3em;
  }

  &:hover {
    text-decoration: none;
    color: ${variables.colors.orange};
    border-bottom: 5px solid ${variables.colors.orange};

    svg {
      fill: ${variables.colors.orange};
    }
  }

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const Modal = styled(Container)`
  position: absolute;
  top: 0;
  z-index: 999;
  background-color: ${transparentize(0.1, variables.colors.purple)};
  color: ${variables.colors.white};
  height: ${props => props.height}px;
  width: ${props => props.width}px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .close {
    cursor: pointer;
  }

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 1em;

    svg {
      margin-right: 2em;
    }
  }

  .label {
    background-color: ${variables.colors.blue};
    color: ${variables.colors.white};
    padding: 20px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 2em auto;

    &:before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      bottom: 5.8em;
      left: 70%;
      border-right: 15px solid #0000;
      border-left: 15px solid #0000;
      border-top: 15px solid #27bdbe;
    }

    > h1 {
      font-family: ${variables.fonts.title};
      font-size: 30px;
      line-height: 20px;
    }
  }

  @media (min-width: 414px) {
    .label {
      &:before {
        bottom: 9.7em;
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 60px;
    }

    a {
      font-size: 40px;
      padding: 25px 40px;
    }

    .label {
      &:before {
        bottom: 11.8em;
      }
    }
  }
`;
