import styled, { css } from "styled-components";

const LayoutStyled = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: ${theme.layout.small}px;
    grid-row-gap: ${theme.layout.small}px;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    & > * {
      align-self: start;
    }
  `}
`;

export default LayoutStyled;
