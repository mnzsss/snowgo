import styled from 'styled-components';
import { darken } from 'polished';

import variables from '~/styles/variables';

import background from '~/assets/img/navigation_bg.png';

export const MenuLinks = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  .active {
    background: ${variables.colors.orange};
    border-radius: 5px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background: ${darken(0.08, variables.colors.orange)};
      opacity: 1;
    }

    svg,
    img {
      display: inline-block;
      margin-right: 10px;
      max-width: 16px;
    }
  }

  a {
    color: #fff;
    font-size: 14px;
    padding: 5px 10px;
    text-transform: lowercase;
    transition: all ease 0.2s;

    &:hover {
      text-decoration: none;
      opacity: 0.6;
    }

    svg,
    img {
      display: none;
    }

    & + a {
      margin-left: 3em;
    }
  }

  @media (max-width: 1200px) {
    a {
      & + a {
        margin-left: 1em;
      }
    }
  }
`;

export const Wrapper = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  height: 220px;
  position: relative;
  z-index: 999;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .bucket {
    a {
      height: 80px;
      width: 80px;
      margin-left: 30px;

      img {
        max-width: 40px;
      }
    }

    > div {
      padding: 5px 10px 5px 0;

      &:before {
        left: -0.5em;
      }
    }
  }

  @media (max-width: 1200px) {
    .bucket {
      p {
        font-size: 14px;
        line-height: 1;
      }
    }
  }
`;
