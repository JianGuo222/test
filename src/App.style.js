import styled from 'styled-components';
import { Flex } from 'grid-styled';

export const CenterWrapper = styled(Flex).attrs({
  alignItems: 'center',
  justifyContent: 'center',
})`
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-height: 600px) {
    display: block;
  }
`;

export const WelcomeWrapper = styled.div`
  width: 480px;
  max-width: 100%;
  padding: 4em 2em;
  text-align: center;
  margin: 0 auto;

  h1 {
    font-weight: normal;
    margin: 0 0 0.6em 0;
    font-size: 3em;
    color: #444;

    small {
      display: block;
      font-size: 0.6em;
      color: #aaa;
      padding: 0.4em 0;
    }
  }
`;

export const Button = styled.button`
  width: 248px;
  height: 56px;
  border-radius: 28px;
  background-color: #156db2;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2em;
  transition: all 0.3s ease-in-out;

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #009688;
  }
`;
