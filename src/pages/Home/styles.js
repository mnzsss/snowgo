import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

import maskCarousel from '~/assets/img/mask_carousel.png';

import variables from '~/styles/variables';

export const CarouselContainer = styled(Carousel)`
  height: ${props => (props.width < 825 ? props.height : '600')}px;
  background-color: ${variables.colors.primary};
  color: ${variables.colors.white};
  overflow: hidden;

  .carousel-indicators {
    li {
      font-size: 0;
      background-color: ${variables.colors.white};
      height: 19px;
      width: 19px;
      border-radius: 25px;
      border: none;
      opacity: 1;
      transition: all ease 0.4s;

      & + li {
        margin-left: 10px;
      }
    }

    .active {
      width: 100px;
      background-color: ${variables.colors.blue};
    }
  }

  @media (min-width: 825px) {
    margin-top: -35px;
    background-color: transparent;
    background-image: url(${maskCarousel});
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 99;
    overflow: initial;
  }
`;
