import styled from 'styled-components';
import { Link } from 'react-router-dom';

import variables from '~/styles/variables';

import backgroundSlider from '~/assets/img/slider/background_slider.png';

export const Wrapper = styled.div`
  background-color: ${variables.colors.primary};
  color: ${variables.colors.white};
  position: relative;
  overflow-x: hidden;
  height: 100%;
  min-height: ${props => props.height}px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pular = styled(Link)`
  font-family: ${variables.fonts.title};
  color: ${variables.colors.blue};
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  right: 2em;
  top: 3.5em;
`;

export const Carousel = styled.div`
  background-image: url(${backgroundSlider});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  display: flex;
  align-items: center;
  height: 585px;
  margin-top: -5em;
`;

export const Controls = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Indicators = styled.div`
  button {
    font-size: 0;
    background-color: ${variables.colors.white};
    height: 19px;
    width: 19px;
    border-radius: 25px;
    border: none;
    transition: all ease 0.4s;

    & + button {
      margin-left: 10px;
    }
  }

  .active {
    width: 100px;
    background-color: ${variables.colors.blue};
  }
`;

export const Next = styled.img`
  cursor: pointer;
  transition: opacity ease 0.4s;
  opacity: 1;

  &:hover {
    opacity: 0.7;
  }
`;
