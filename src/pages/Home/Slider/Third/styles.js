import styled from 'styled-components';

import variables from '~/styles/variables';
import Container from '~/styles/components/Container';

import photo from '~/assets/img/slider/photo2.jpg';

export const ImageSlide = styled(Container)`
  background-image: url(${photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: ${props => props.height / 2}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .icon {
    color: ${variables.colors.orange};
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    & + a {
      margin-left: 1em;
    }
  }
`;

export const Bar = styled.div`
  background-color: ${variables.colors.orange};
  font-family: ${variables.fonts.title};
  text-align: center;
  padding: 5px 0;
  position: relative;
  top: 4em;

  @media (min-width: 414px) {
    font-size: 17px;
  }

  @media (min-width: 768px) {
    font-size: 25px;
    top: 2.6em;
  }
`;

export const Content = styled(Container)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 45px;
    line-height: 45px;
  }

  .neve {
    position: relative;
    bottom: 5em;
    left: 12em;
    width: 100%;
    max-height: 100%;
    z-index: -1;
  }

  @media (min-width: 414px) {
    .neve {
      left: 15em;
      bottom: 3em;
    }

    h1 {
      font-size: 50px;
      line-height: 55px;
      margin-top: 10px;
    }
  }

  @media (min-width: 768px) {
    .neve {
      width: 400px;
      left: 20em;
      bottom: 6em;
    }

    h1 {
      font-size: 90px;
      line-height: 95px;
    }
  }
`;
