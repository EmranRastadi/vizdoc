import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  &.active {
    background: linear-gradient(to left, #249abe, #25c1fb);
  }
  button {
    padding: 10px;
    color: #c4c4c4;
    width: 100%;
    min-height: 50px;
    flex-direction: column;
    & div.one {
      flex-direction: row;
      display: flex;
      column-gap: 10px;
    }

    &.active {
      color: #fff;
      display: flex;
      color: #fff;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      column-gap: 10px;
    }
  }
`;

export { Container };
