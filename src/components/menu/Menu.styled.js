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
        border: 1px solid ${theme.colors.blue_light};
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

export default MenuStyled;
