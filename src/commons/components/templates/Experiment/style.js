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

  @media screen and (max-width: 600px) {
    .responsive-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      p {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
      }
    }

    .hid-col-res {
      display: none !important;
    }
  }
`;

export { MainContainer };
