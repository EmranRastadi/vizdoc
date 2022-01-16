import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  column-gap: 6px;
  cursor: pointer;
  font-weight: bolder;
  &.active {
    color: #a2b428;
  }
`;

const CircleCount = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background: #a2b428;
    color: #fff;
  }
`;

export { Container, CircleCount };
