import styled from 'styled-components';

import variables from '~/styles/variables';

export const Wrapper = styled.div`
  height: 100%;

  .container {
    display: flex;
    align-items: center;
    height: 100%;

    .title {
      font-size: 80px;
      line-height: 1;
    }

    .frase {
      font-size: 50px;
      line-height: 1;
      max-width: 624px;
    }
  }
`;

export const Background = styled.div`
  .cube {
    position: absolute;
    z-index: 1;
    top: 0;
  }

  .cubes {
    right: 7em;
  }

  .blue {
    top: auto;
    bottom: 1em;
    left: -2em;
  }

  @media (max-width: 1440px) {
    .cubes {
      right: 4em;
    }
  }

  @media (max-width: 1199px) {
    .cubes {
      right: -5em;
    }
  }

  @media (max-width: 1024px) {
    .cubes {
      right: -8em;
    }
  }
`;

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: initial;
  margin: 20px 0;
`;

export const DeliveryType = styled.div`
  text-align: center;

  > p {
    font-size: 14px;
    margin: 10px 0;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const Vantagens = styled.div`
  border: 1px solid ${variables.colors.blue};
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 20px;
    margin-top: 0;
    padding: 0;
  }

  ul {
    list-style: none;

    li {
      font-size: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid ${variables.colors.primary};

      @media (max-width: 375px) {
        & {
          font-size: 8px;
        }
      }

      & + li {
        margin-top: 10px;
      }

      &:last-child {
        padding: 0;
        border: 0;
      }
    }
  }
`;
