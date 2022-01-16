import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
`;

const Next = styled.div`
  width: 50px;
  position: absolute;
  height: 40px;
  z-index: 9;
  background: linear-gradient(to right, #fff, transparent);
  left: 0;
  top: -3px;
  display: flex;
  justify-content: end;

  align-items: center;
  color: #212121;
`;
const Prev = styled.div`
  width: 50px;
  position: absolute;
  z-index: 9;
  height: 40px;
  background: linear-gradient(to left, #fff, transparent);
  right: 0;
  justify-content: start;
  top: -3px;
  display: flex;
  align-items: center;
  color: #212121;
`;

export { Container, Next, Prev };
