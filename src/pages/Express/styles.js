import styled from 'styled-components';

import variables from '../../styles/variables';

export const Content = styled.div`
  margin-bottom: 120px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 38px;
      line-height: 38px;
      color: ${variables.colors.primary};
    }

    > img {
      position: relative;
      left: 3em;
      max-width: 150px;
    }
  }

  .frase {
    font-size: 27px;
    line-height: 35px;
    color: ${variables.colors.orange};
  }

  p {
    color: ${variables.colors.darkgray};
  }

  small {
    color: ${variables.colors.gray};
  }

  .loggi-text {
    font-size: 10px;
    line-height: 13px;
    margin-top: 30px;
  }

  .action {
    text-align: center;

    > a {
      color: ${variables.colors.white};
      display: inline-block;
      margin: 20px auto 0;
      padding: 5px 80px;
    }
  }

  @media (min-width: 768px) {
    header {
      h1 {
        font-size: 70px;
        line-height: 70px;
      }

      > img {
        position: relative;
        right: -5em;
        max-width: 250px;
      }
    }

    small,
    .loggi-text {
      font-size: 16px;
      line-height: 20px;
    }

    .frase {
      font-size: 60px;
      line-height: 68px;
      margin: 0;
    }

    > p {
      margin-top: 1em;
      font-size: 20px;
    }

    .action {
      > a {
        font-size: 25px;
        margin-top: 50px;
      }
    }
  }

  @media (min-width: 825px) {
    header {
      margin-top: 50px;

      h1 {
        font-size: 100px;
        line-height: 1;
      }

      > img {
        width: 600px;
        max-width: unset;
      }
    }

    .frase {
      max-width: 696px;
    }
  }
`;

export const Vantagens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .vantagem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 4px;
    background-color: ${variables.colors.white};
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);

    p {
      margin-top: 1em;
      font-size: 0.7em;
    }

    svg {
      width: 2.5em;
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    .vantagem {
      min-height: 200px;

      img {
        width: 200px;
      }

      svg {
        width: 100%;
        height: 80px;
      }

      p {
        font-size: 1.25em;
      }
    }
  }

  @media (min-width: 825px) {
    .vantagem {
      background: transparent;
      box-shadow: none;

      p {
        font-weight: bold;
      }
    }
  }
`;
