import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(255 255 255 / 62%);
  z-index: 999;
`;

const Progress = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 26px;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  // margin-top: 20%;
`;

export { Container, Progress };
