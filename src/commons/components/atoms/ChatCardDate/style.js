import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  column-gap: 10px;
  svg.activated {
    fill: blue !important;
  }
`;

export { Container };
