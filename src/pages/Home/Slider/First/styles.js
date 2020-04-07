import styled from 'styled-components';

import variables from '~/styles/variables';
import Container from '~/styles/components/Container';

import photo from '~/assets/img/slider/photo.jpg';

export const ImageSlide = styled(Container)`
  background-image: url(${photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: ${props => props.height / 2.5}px;

  .icon {
    color: ${variables.colors.orange};
  }

  @media (min-width: 768px) {
    min-height: ${props => props.height / 2.2}px;
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

export const Content = styled(Container)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    width: 200px;
    max-height: 100%;
  }

  .neve {
    position: relative;
    bottom: -2em;
    width: 100%;
    max-height: 100%;
  }

  a {
    font-size: 14px;
    margin-top: 20px;
  }

  @media (min-width: 414px) {
    .logo {
      width: 300px;
      margin-bottom: 20px;
    }

    .neve {
      bottom: -3em;
    }
  }

  @media (min-height: 768px) {
    .logo {
      width: 400px;
      margin-bottom: 20px;
    }

    a {
      font-size: 1.5em;
    }
  }
`;
