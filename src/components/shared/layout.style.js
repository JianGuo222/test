import styled from 'styled-components';
import { Flex } from 'grid-styled';

export const AppWrapper = styled(Flex)`
  width: 100%;
  height: 100%;

  @media (max-height: 600px) {
    display: block;
  }

  header,
  footer {
    position: fixed;
    z-index: 1;
    width: 100%;
    padding: 2em;
    background-color: #f5f7fa;
    box-sizing: border-box;
  }

  header {
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-height: 600px) {
      position: relative;
      display: block;
    }
  }

  footer {
    bottom: 0;
    text-align: center;
    font-size: 1.2em;

    p {
      margin-top: 0;
      margin-bottom: 0.3em;
      color: #666;
    }

    @media (max-height: 600px) {
      position: relative;
      display: block;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const PageWidth = styled.div`
  max-width: 1200px;
  width: 100%;

  h2 {
    font-weight: normal;
    font-size: 2em;
    text-transform: uppercase;
    color: #555;
  }
`;
