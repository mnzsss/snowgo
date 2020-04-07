import styled from 'styled-components';

import { Container } from 'react-bootstrap';

import variables from '~/styles/variables';

export const Wrapper = styled.footer`
  background: ${variables.colors.primary};
  color: ${variables.colors.lightWhite};
  padding: 70px 0;

  hr {
    border-top-width: 2px;
  }
`;

export const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  margin-bottom: 70px;

  ul {
    list-style: none;

    & + ul {
      margin-top: 30px;
    }
  }

  h3 {
    font-family: ${variables.fonts.paragraph};
    font-size: 14px;
    color: ${variables.colors.blue};
    margin-bottom: 10px;
  }

  p {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }

  a {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    transition: opacity ease 0.2s;

    svg {
      max-width: 18px;
      margin-right: 10px;
    }

    &:hover {
      opacity: 0.6;
      text-decoration: none;
    }
  }

  @media (max-width: 1200px) {
    p,
    a {
      font-size: 14px;
    }
  }
`;

export const Credits = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
`;
