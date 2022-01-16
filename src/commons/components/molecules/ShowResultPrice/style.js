import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 45px;
  width: 180px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #3dd0fc;
  justify-content: center;
`;
const Label = styled.span`
  &.title {
    position: absolute;
    width: 115px;
    height: 25px;
    background: #fff;
    top: -12px;
    right: 0;
    left: 0;
    margin: auto;
    font-size: 12px;
    text-align: center;
  }

  &.value {
    font-size: 15px;
    color: #3dd0fc;
  }
`;

export { Label, Container };
