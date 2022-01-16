import styled from 'styled-components';

const ContentContainer = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 60px;
`;

const ContentItem = styled.li``;

const Style = styled.div`
  .MuiTableRow-root td:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .MuiTableRow-root td:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
export { ContentContainer, Style };
