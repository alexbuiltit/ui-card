import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: left;
    font-size: 14px;
    padding: 8px 16px;
    background: transparent;
    border: none;
    &:hover {
      background: ${theme.colors.secondary};
      color: #fff;
    }
  `}
`;

export default ButtonStyled;
