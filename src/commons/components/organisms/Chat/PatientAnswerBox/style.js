import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  position: relative;
  align-items: end;
  padding: 15px 0;
  flex-direction: row;
  overflow: hidden;
  column-gap: 20px;
  position: sticky;
  bottom: 0;
  justify-content: center;
`;

const TextBox = styled.div`
  flex: 1;
  height: 40px;
  textarea {
    &:focus {
      border: none !important;
      outline: unset;
    }

    font-family: yekan;
  }
`;

const LoadingButton = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreAttachment = styled.div`
  height: 60px;
  background: #249abe;
  position: absolute;
  top: 35px;
  left: 15px;
  right: 15px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px -3px 15px 2px rgb(0 0 0 / 20%);
`;

const Main = styled.div`
  background: #fff;

  border-radius: 10px;
  flex: 1;
  margin: 0 15px;
  column-gap: 15px;

  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  .active {
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

const MainNotAccess = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerCo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px 0 15px;
  flex-direction: row;
  column-gap: 10px;
  height: 100%;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const MainProg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Container,
  Main,
  PreAttachment,
  AttachButton,
  MainProg,
  MainNotAccess,
  ContainerCo,
  LoadingButton,
  Img,
  TextBox,
};
