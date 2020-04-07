import styled from 'styled-components';

export const Background = styled.div`
  .cube {
    position: absolute;
    z-index: 1;
    top: 0;
  }

  .cubes {
    right: 0;
  }

  .blue {
    top: auto;
    bottom: 1em;
    left: -2em;
  }

  @media (max-width: 1440px) {
    .cubes {
      right: -5em;
    }
  }

  @media (max-width: 1199px) {
    .cubes {
      right: -10em;
    }
  }

  @media (max-width: 1024px) {
    .cubes {
      right: -14em;
    }
  }
`;
