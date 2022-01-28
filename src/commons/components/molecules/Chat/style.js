import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background: linear-gradient(to left, rgb(37, 153, 189), rgb(40, 195, 251));
  height: 80px;
  z-index: 9;
  position: sticky;
  border-radius: 10px 10px 0px 0px;
  top: 0px;
  .detail {
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 15px;
  }
  .tags {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: end;
    padding-left: 15px;
    column-gap: 8px;
  }
`;

const UserDetail = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

const UserContent = styled.div`
  height: 50px;
`;

export { HeaderContainer, UserDetail, UserContent };
