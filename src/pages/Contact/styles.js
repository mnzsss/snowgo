import styled from 'styled-components';

import { Container } from 'react-bootstrap';

import infoBackground from '~/assets/img/footer_programada.png';

import variables from '../../styles/variables';

export const ContainerContact = styled(Container)`
  margin-top: 50px;

  h1 {
    color: ${variables.colors.darkgray};
  }

  .phone {
    position: absolute;
    right: -3em;
  }

  ul {
    list-style: none;
    margin-top: 20px;
    font-family: ${variables.fonts.paragraph};

    span {
      color: ${variables.colors.orange};
      font-size: 20px;
      font-weight: 700;
    }

    li {
      display: flex;
      align-items: center;

      p,
      a {
        font-size: 16px;
        font-weight: 700;
        color: ${variables.colors.darkgray};
      }

      small {
        font-size: 14px;
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  .desktop {
    margin-top: -10em;

    img {
      height: 835px;
      object-fit: cover;
    }

    .infos {
      display: flex;
      justify-content: center;
      padding-left: 10em;
      flex-direction: column;

      background-image: url(${infoBackground});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 0em 44em;

      h1 {
        font-size: 50px;
        color: ${variables.colors.primary};
        max-width: 410px;
        line-height: 1;
      }

      p {
        font-size: 38px;
      }

      ul {
        span {
          color: ${variables.colors.orange};
          font-size: 34px;
        }

        li {
          margin-bottom: 10px;

          a {
            font-size: 48px;
          }

          svg {
            width: 40px;
            height: 100%;
          }
        }
      }
    }
  }

  @media (min-width: 1199px) {
    .desktop {
      .infos {
        background-position: 0em 47em;
      }
    }
  }

  @media (min-width: 1024px) {
    .desktop {
      .infos {
        background-position: 0em 49em;
        padding-left: 4em;
      }
    }
  }

  @media (min-width: 825px) {
    .desktop {
      .infos {
        background-position: 0em 50em;
        padding-left: 4em;
      }
    }
  }

  @media (min-width: 768px) {
    .phone {
      position: absolute;
      right: -3em;
      top: 8em;
    }

    .loja {
      display: flex;
      justify-content: space-between;
    }

    ul {
      span {
        font-size: 22px;
      }

      li {
        p,
        a,
        small {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width: 835px) {
    margin-bottom: 120px;
  }
`;
