import styled, { css } from "styled-components";

const CardStyled = styled.div`
  ${({ theme }) => css`
    display: block;
    .card__content {
      padding: ${theme.spacing.large}px ${theme.spacing.medium}px;
    }
    .card__heading {
      font-size: ${theme.typography.headings.h3.size};
      line-height: ${theme.typography.headings.h3.line_height};
    }
  `}
`;

export default CardStyled;
