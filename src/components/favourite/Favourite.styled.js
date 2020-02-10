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
  `}
`;

export default FavouriteStyled;
