import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 10px;
  bottom: 0;
  position: relative;
  border-radius: 10px;
  background: #f1f1f1;
  overflow: hidden;
`;

const ProgressStep = styled.div`
  width: ${(props) => props.theme.progress.width};
  height: 10px;
  right: 0;
  top: 0px;
  position: absolute;
  background: linear-gradient(to left, #97a825, #cedc5d);
  border-radius: 10px;
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;
`;

export { Container, ProgressStep };
