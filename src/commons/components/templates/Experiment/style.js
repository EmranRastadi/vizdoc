import styled from 'styled-components';

const MainContainer = styled.div`
  .MuiTableRow-root td:first-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .MuiTableRow-root td:last-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

export { MainContainer };
