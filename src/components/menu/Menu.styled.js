import styled, { css } from "styled-components";

const MenuStyled = styled.div`
  ${({ theme }) => css`
    position: relative;
    .menu__toggle {
      border-radius: 2px;
      border: 1px solid ${theme.colors.primary};
      padding: 8px 16px;
      background: transparent;
      &:hover,
      &:active,
      &:focus {
        background: ${theme.colors.secondary};
        svg {
          path {
            fill: #fff;
          }
        }
      }
      svg {
        width: 3px;
        height: auto;
      }
    }
    .menu {
      position: absolute;
      right: 0;
      display: none;
      background-color: #fff;
      width: 124px;
      &.visible {
        display: flex;
        flex-direction: column;
        margin-top: ${theme.baseSize}px;
        border: 1px solid ${theme.colors.primary};
      }
      .menu__toggle {
        padding: 8px 16px;
        background: transparent;
        border: none;
      }
    }
  `}
`;

export default MenuStyled;
