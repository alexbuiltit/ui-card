import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: left;
    font-size: ${theme.typography.p.size};
    padding: ${theme.layout.tiny}px ${theme.layout.small}px;
    background: transparent;
    border: none;
    &:hover,
    &:focus {
      background: ${theme.colors.secondary};
      color: ${theme.colors.white};
    }
  `}
`;

export default ButtonStyled;
