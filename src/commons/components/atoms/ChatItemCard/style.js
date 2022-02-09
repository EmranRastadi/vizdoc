import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  padding: 15px;
  min-height: 80px;
  background: ${(props) => props?.theme?.textChat?.background};
  float: ${(props) => props?.theme?.textChat?.float};
  color: ${(props) => props?.theme?.textChat?.color};
  margin-bottom: 15px;
  max-width: 450px;
  min-width: 200px;
  max-width: @media screen and (max-width: 780px) {
    width: 100% !important;
  }
  max-width: @media screen and (max-width: 1028px) {
    width: 350px !important;
  }

  &.active {
    float: left;
    background: linear-gradient(to left, rgb(37, 153, 189), rgb(40, 195, 251));
    color: #fff;
  }
`;

export { Container };
