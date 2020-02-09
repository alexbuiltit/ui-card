import styled, { css } from "styled-components";

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  & > * {
    align-self: start;
  }
`;

export default LayoutStyled;
