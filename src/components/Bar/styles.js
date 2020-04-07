import styled from 'styled-components';

import Container from '~/styles/components/Container';
import variables from '~/styles/variables';

export const BarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 0;

  img {
    max-width: 150px;
  }

  @media (min-width: 768px) {
    img {
      max-width: 250px;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${variables.colors.gray};

    & + a {
      margin-left: 1em;
    }
  }
`;
