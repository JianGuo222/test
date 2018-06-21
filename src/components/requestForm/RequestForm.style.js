import styled from 'styled-components';

export const FormWrapper = styled.div`
  padding: 1em;
`;
export const FormHeader = styled.div`
  text-align: center;
  font-weight: bold;
  hr {
    width: 3em;
    margin: 1em auto;
  }
`;
export const FormBody = styled.div`
  p {
    font-size: 0.9em;
    line-height: 1.4em;
    text-align: center;
    margin-bottom: 2em;
  }
`;
export const Fieldset = styled.div`
  margin-bottom: 0.8em;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
export const PendingContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: white;
  height: 3em;
  left: 0;
  opacity: 0.9;
  z-index: 1;
`;

export const CenterBlock = styled.div`
  display: inline-block;
  margin: 0 auto;
  position: relative;
  margin-left: -30px;
`;
export const ErrorBlock = styled.div`
  margin: 1em;
  position: relative;
  color: red;
  font-size: 0.9em;
  line-height: 1.4em;
  text-align: center;
`;
