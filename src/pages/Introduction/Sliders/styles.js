import styled from 'styled-components';
import Frase from '~/styles/components/Frase';

import variables from '~/styles/variables';

export const Container = styled.div`
  h1 {
    font-size: 4em;
    line-height: 64px;
    margin-top: 0.5em;

    @media (max-width: 375px) {
      & {
        font-size: 3.5em;
        line-height: 56px;
      }
    }
  }

  > p {
    font-size: 47px;
    line-height: 52px;
    margin-bottom: 40px;
  }
`;

export const Elements = styled.div`
  .element {
    position: absolute;
    top: 3em;
    left: -4em;
  }

  .truck {
    max-width: 150px;
  }

  .cube2 {
    right: -5em;
    top: 8em;
    left: auto;
  }

  .cube3 {
    right: -3em;
    top: 26em;
    left: auto;
  }

  .danger {
    right: -5em;
    top: 5em;
    left: auto;
  }

  .danger2 {
    left: -3em;
    top: 36em;
    width: 30%;
    transform: rotate(-50deg);
  }

  @media (max-width: 375px) {
    .truck {
      max-width: 130px;
    }
  }
`;

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const FraseThird = styled(Frase)`
  font-size: 35px !important;
  margin-top: 40px;

  @media (min-width: 414px) {
    margin-top: 20px;
    font-size: 40px !important;
  }
`;
