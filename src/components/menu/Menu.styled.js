import styled, { css } from "styled-components";

const MenuStyled = styled.div`
  ${({ theme }) => css`
    position: relative;
    .menu__toggle {
      border-radius: 2px;
      border: 1px solid ${theme.colors.primary};
      padding: ${theme.layout.tiny}px ${theme.layout.small}px;
      background: transparent;
      &:hover,
      &:active,
      &:focus {
        background: ${theme.colors.secondary};
        svg {
          path {
            fill: ${theme.colors.white};
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
      background-color: ${theme.colors.white};
      width: 124px;
      &.visible {
        display: flex;
        flex-direction: column;
        margin-top: ${theme.baseSize}px;
        border: 1px solid ${theme.colors.primary};
      }
      .menu__toggle {
        padding: ${theme.layout.tiny}px ${theme.layout.small}px;
        background: transparent;
        border: none;
      }
    }
  `}
`;

export default MenuStyled;
