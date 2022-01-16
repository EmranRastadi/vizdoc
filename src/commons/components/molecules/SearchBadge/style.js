import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  font-size: 13px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 30px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justigy-content: center;
  overflow: hidden;
  column-gap: 10px;
  cursor: pointer;

  &.active {
    padding-right: 0;
    background: #a2b428 !important;
    color: #fff;
  }
`;

const CloseBadge = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #92a223;
`;

export { Container, CloseBadge };
