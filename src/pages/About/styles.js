import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import variables from '~/styles/variables';

export const AboutContainer = styled(Container)`
  text-align: center;
  margin-bottom: 120px;
  margin-top: 50px;

  h1 {
    color: ${variables.colors.blue};
    margin: 20px 0;
  }

  p {
    color: ${variables.colors.darkgray};
    line-height: 1.5;
  }

  img {
    max-width: 100px;
    margin: 40px 0;
  }

  @media (min-width: 825px) {
    h1 {
      font-size: 38px;
    }

    p {
      font-size: 18px;
    }

    img {
      margin-right: 100px;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 150px 0;

      > p {
        text-align: left;
      }
    }
  }
`;
