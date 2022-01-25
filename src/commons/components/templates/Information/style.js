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
  position: relative;
  cursor: pointer;
  border: 2px dashed #ccc;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    cursor: pointer !important;
    left: 0;
  }
`;

export { TabContents, Container, ContainerImageAdd };
