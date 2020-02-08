import styled, { css } from "styled-components";

const MenuStyled = styled.div`
  ${({ theme }) => css`
    position: relative;
    .menu__toggle {
      border-radius: ${theme.layout.border_radius};
      border: 1px solid #d2d7df;
      padding: 8px 16px;
      background: transparent;
      svg {
        width: 3px;
        height: auto;
      }
    }
    .menu {
      position: absolute;
      left: 0;
      display: none;
      background-color: #fff;
      &.visible {
        display: flex;
        flex-direction: column;
        margin-top: ${theme.baseSize}px;
        border: 1px solid #d2d7df;
      }
      button {
        padding: 8px 16px;
        background: transparent;
        border: none;
      }
    }
  `}
`;

export default MenuStyled;
