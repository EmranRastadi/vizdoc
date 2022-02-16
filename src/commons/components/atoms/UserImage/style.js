import styled from 'styled-components';

const Container = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #7a7a7a;
  .prof-icon {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-size: 40px;
    background-image: url(${(props) => props?.theme?.profIcon?.src});
  }
`;

export { Container };
