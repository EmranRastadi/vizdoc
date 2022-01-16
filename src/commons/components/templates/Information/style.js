import styled from 'styled-components';

const TabContents = styled.div`
  width: 100%;
  display: none;
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;
  &.active {
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    display: block;
  }
`;

const Container = styled.div`
  width: 100%;
`;
const ContainerImageAdd = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  color: #aaa;
  border-radius: 10px;
  cursor: pointer;
  border: 2px dashed #ccc;
`;

export { TabContents, Container, ContainerImageAdd };
