import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  column-gap: 20px;
  justify-content: center;
`;

const Main = styled.div`
  background: #fff;
  border-radius: 10px;
  flex: 1;
  margin: 0 15px;
  column-gap: 15px;
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 15px 15px;
  .active {
    width: 110px !important;
  }
`;

const AttachButton = styled.div`
  cursor: pointer;
  font-size: 23px;
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    cursor: pointer;
  }
`;

export { Container, Main, AttachButton };
