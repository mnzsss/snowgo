import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import dangerIcon from '~/assets/img/slider/danger.svg';

import variables from '~/styles/variables';

export const CallContainer = styled(Container)`
  position: relative;
  margin-top: -30px;

  .row {
    align-items: center;
  }

  .bucket {
    position: absolute;
    top: 10em;
    right: -4.7em;
    z-index: 9999;

    > div {
      position: absolute;
      top: 10em;
      right: 3.8em;
      padding: 10px;
      max-width: 100%;

      &:before {
        position: absolute;
        top: -1.8em;
        left: 0.75em;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #27bdbe;
      }

      p {
        writing-mode: vertical-lr;
        text-orientation: mixed;
      }
    }
  }

  .content {
    padding-left: 50px;

    h2 {
      font-size: 55px;
      line-height: 52px;
      margin-bottom: 10px;
    }
  }

  .neve {
    height: 100%;
    width: 200%;
    position: relative;
    right: -3em;
  }

  @media (max-width: 1200px) {
    .bucket {
      top: 3em;
    }

    .content {
      h2 {
        font-size: 40px;
        line-height: 43px;
      }
    }
  }

  @media (max-width: 1024px) {
    margin-top: -16px;
  }
`;

export const DeliveryTypes = styled(Container)`
  margin: 70px 0;

  .title {
    text-align: center;
    margin-bottom: 80px;

    > a {
      cursor: auto;

      &:hover {
        background: ${variables.colors.orange};
      }
    }
  }

  .type {
    display: flex;

    img {
      width: 100%;
      max-width: 300px;
      position: relative;
      left: -3em;
      top: -7em;
    }

    > .schedule {
      width: 100%;
      max-width: 350px;
      left: 10em;
    }

    > .content {
      max-width: 280px;

      > h2 {
        font-size: 58px;
        line-height: 1;
      }

      .frase {
        margin: 10px 0;
        font-size: 23px;
        line-height: 1.2;
        color: ${variables.colors.orange};
      }

      p {
        margin-bottom: 30px;
        color: ${variables.colors.darkgray};
      }
    }
  }

  @media (max-width: 1200px) {
    .type {
      > .schedule {
        left: 5em;
      }

      > .content {
        > h2 {
          font-size: 50px;
        }
      }
    }
  }
`;

export const GeloContainer = styled(Container)`
  margin-top: 125px;

  img {
    object-fit: cover;
  }

  .content {
    margin: 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h3 {
      font-size: 70px;
      line-height: 1;
      max-width: 395px;
      margin-bottom: 20px;

      &:after {
        content: url(${dangerIcon});
        position: absolute;
        top: 0.5em;
        right: 2em;
      }
    }

    .tag {
      background-color: ${variables.colors.orange};
      font-family: ${variables.fonts.title};
      text-align: center;
      padding: 20px 30px;
      font-size: 56px;
      line-height: 1;
      color: ${variables.colors.white};
      text-align: left;
      width: 565px;
    }
  }

  @media (max-width: 1200px) {
    .content {
      h3 {
        font-size: 55px;

        &:after {
          right: 0.7em;
        }
      }

      .tag {
        font-size: 40px;
        width: 450px;
      }
    }
  }

  @media (max-width: 1024px) {
    .content {
      h3 {
        &:after {
          right: -0.6em;
        }
      }

      .tag {
        font-size: 35px;
        width: 400px;
      }
    }
  }
`;
