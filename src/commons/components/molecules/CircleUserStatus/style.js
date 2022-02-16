import styled from 'styled-components';

const Container = styled.div`
  width : 40px;
  height : 40px;
  border-radius : 50%;
  background #fff;
  position : relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  .prof-icon{
    width : 40px;
    height : 40px;
    border-radius : 50px;
    background-size : 40px;
    background-image : url(${(props) => props?.theme?.profIcon?.src});
  }
  &:after {
    content : '';
    position : absolute;
    right : 0;
    top : 0;
    background : red;
    width : 10px;
    height : 10px;
    border-radius : 50%;
  }
`;

export { Container };
