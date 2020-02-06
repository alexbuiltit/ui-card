import styled, { css } from "styled-components";

const CardStyled = styled.div`
  ${({ theme }) => css`
    display: block;
    max-width: 300px;
    width: 100%;
    .card__image {
      height: 12rem;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    .card__content {
      padding: ${theme.spacing.large}px ${theme.spacing.medium}px;
    }
    .card__heading {
      font-size: ${theme.typography.headings.h3.size};
      line-height: ${theme.typography.headings.h3.line_height};
      margin: 0;
    }
  `}
`;

export default CardStyled;
