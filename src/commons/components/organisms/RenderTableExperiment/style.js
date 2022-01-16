import styled from 'styled-components';

export const Style = styled.div`
  .table-curved {
    border-collapse: collapse;
  }
  .table-curved th {
    padding: 3px 10px;
  }
  .table-curved th:first-child {
    padding: 6px;
  }
  .table-curved td {
    background-color: #e5e5e5;
    padding: 6px 10px;
    border-bottom: 2px solid white;
    border-top: 2px solid white;
  }
  .table-curved td:first-child {
    padding: 6px;
    border-radius: 8px 0 0 8px;
    background-color: coral;
  }
  .table-curved td:last-child {
    border-radius: 0 5px 5px 0;
  }
  .table-curved tr:hover td:not(:first-child) {
    background-color: #c5c5c5;
  }
  .table-curved tr.blue td:first-child {
    background-color: cornflowerblue;
  }
  .table-curved tr.green td:first-child {
    background-color: forestgreen;
  }
`;
