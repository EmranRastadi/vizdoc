import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 15px;
  height : 80px;
  right: 15px;
  background: #27a7d1;
  left: 15px;
  direction: ltr;
  border-radius: 15px;
  display: flex;
  opacity : 0;
  z-index: -1;
  transform : translateX(-80px);
  align-items: center;
  justify-content: center;
  flex-direction: row;
  column-gap: 9px;
  transition :0.3s all ease;
  -webkit-transition :0.3s all ease;
  -moz-transition :0.3s all ease;
  &.active{
    opacity : 1;
    z-index: 1;
    transform : translateX(0px);
  }

  .deactivate{
    display : none;
  }
  .sound-wave {
    height: 80px;
    flex:1;
    border-radius: 15px;
  }

  @media screen and (max-width: 780px) {
    .sound-wave {
      height: 80px;
      width: 200px !important;
      border-radius: 15px;
    }
  }


  @media screen and (max-width: 1024px) {
    .sound-wave {
      height: 80px;
      width: 200px !important;
      border-radius: 15px;
    }
`;

const ButtonContainer = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  column-gap: 6px;
  margin-right: 15px;
  &.active {
    width: 200px;
  }
`;

export { Container, ButtonContainer };
