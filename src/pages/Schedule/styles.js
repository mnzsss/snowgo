import styled from 'styled-components';

import variables from '~/styles/variables';

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

  .action {
    text-align: center;

    > a {
      color: ${variables.colors.white};
      display: inline-block;
      margin: 40px auto 0;
      padding: 5px 40px;
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
        top: 5em;
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
  margin-top: 40px;

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
  }

  @media (min-width: 768px) {
    .vantagem {
      min-height: 200px;

      img,
      svg {
        width: 100px;
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
