import styled from 'styled-components';

import variables from '~/styles/variables';

import Container from '~/styles/components/Container';

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .logo {
    width: 150px;
    max-height: 100%;
  }

  @media (min-width: 768px) {
    .logo {
      width: 250px;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .icon {
    color: ${variables.colors.orange};
  }

  a {
    & + a {
      margin-left: 1em;
    }
  }
`;

export const Content = styled(Container)`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;

  h1 {
    font-size: 50px;
    line-height: 50px;
    letter-spacing: -2px;
  }

  .nao {
    max-width: 180px;
    margin-top: 10px;
  }

  .neve {
    position: relative;
    right: -13em;
    bottom: 6em;
  }

  a {
    font-size: 14px;
    margin-top: 20px;
    position: relative;
    z-index: 999;
  }

  @media (min-width: 414px) {
    h1 {
      font-size: 55px;
      line-height: 60px;
    }

    .nao {
      max-width: 285px;
    }

    .neve {
      position: relative;
      right: -16em;
      bottom: 4em;
    }

    a {
      font-size: 20px;
      margin-top: 30px;
    }
  }

  @media (min-width: 768px) {
    margin-top: 30px;

    h1 {
      font-size: 80px;
      line-height: 70px;
    }

    .nao {
      margin-top: 40px;
      max-width: 500px;
      position: relative;
      z-index: 99;
    }

    .neve {
      position: relative;
      right: -30em;
      bottom: 10em;
      width: 400px;
    }

    a {
      font-size: 30px;
      margin-top: 50px;
    }
  }
`;
