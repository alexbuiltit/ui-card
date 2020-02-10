import styled, { css } from "styled-components";

const FavouriteStyled = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    &.active {
      svg {
        path {
          fill: ${theme.colors.tertiary};
        }
      }
    }
    svg {
      width: ${theme.layout.small}px;
      height: auto;
    }
    .vh {
      position: absolute !important;
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0 !important;
      border: 0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden;
    }
  `}
`;

export default FavouriteStyled;
