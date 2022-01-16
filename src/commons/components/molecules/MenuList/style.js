import styled from 'styled-components';

const ListUl = styled.ul`
  flex-grow: 1;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  column-gap: 15px;
  font-family: 'yekan';
`;
const ListLi = styled.li`
  cursor: pointer;
`;

const ModalConteiner = styled.div`
  background: rgba(0 0 0 / 0.8);
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 100px;
  opacity: 0;
  z-index: -1;
  left: 0;
  transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;

  &.active {
    top: 0 !important;
    opacity: 1 !important;
    z-index: 99999 !important;
    transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
  }
`;
export { ListUl, ListLi, ModalConteiner };
