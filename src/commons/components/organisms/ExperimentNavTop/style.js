import styled from 'styled-components';
const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: end;
  flex-direction: row;
  column-gap: 15px;
  @media screen and (max-width: 600px) {
    span {
      font-size: 10px !important;
    }
  }
`;

export { BadgeContainer };
