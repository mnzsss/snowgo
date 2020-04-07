import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    h1 {
      font-size: 100px;
      line-height: 1;
    }

    p {
      font-size: 74px;
      line-height: 1;
      max-width: 624px;
    }

    a {
      width: fit-content;
      margin-top: 50px;
    }
  }

  @media (max-width: 1024px) {
    .container {
      h1 {
        font-size: 80px;
      }

      p {
        font-size: 50px;
      }
    }
  }

  @media (max-width: 1250px) {
    .container {
      h1 {
        font-size: 80px;
      }

      p {
        font-size: 50px;
      }
    }
  }
`;
