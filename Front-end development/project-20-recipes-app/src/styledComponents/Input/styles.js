import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid var(--primary);
  color: var(--grayHeavy);
  font-family: inherit;
  font-size: 1.3rem;
  outline: 0;
  padding: 7px 0;
  width: 100%;

  &::placeholder {
    color: var(--grayHeavy);
  }
`;

export default Input;
