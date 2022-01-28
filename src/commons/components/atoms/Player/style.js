import styled from 'styled-components';

const Container = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 0 5px 3px rgba(0 0 0 / 15%);
  opacity: 0.6;
  cursor: not-allowed;
  &.active {
    cursor: pointer;
    opacity: 1;
  }
`;

export { Container };
