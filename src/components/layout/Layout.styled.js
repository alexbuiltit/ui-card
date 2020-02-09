import styled, { css } from "styled-components";

const LayoutStyled = styled.div`
  ${({ columns }) => css`
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    & > * {
      margin: 0 10px;
    }
  `}
`;

export default LayoutStyled;
