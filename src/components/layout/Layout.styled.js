import styled, { css } from "styled-components";

const LayoutStyled = styled.div`
  ${({ columns }) => css`
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    & > * {
      align-self: start;
    }
  `}
`;

export default LayoutStyled;
