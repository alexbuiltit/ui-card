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
      width: 16px;
      height: auto;
    }
  `}
`;

export default FavouriteStyled;
