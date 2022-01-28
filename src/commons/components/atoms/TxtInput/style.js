import styled from 'styled-components';

const InputField = styled.input`
  background: none;
  outline: none;
  width: 100%;
  border: unset;
  &:focus {
    outline: unset;
    border: unset;
  }
`;

export { InputField };
