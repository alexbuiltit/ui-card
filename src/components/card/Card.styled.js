import styled, { css } from "styled-components";

const CardStyled = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: ${theme.layout.border_radius};
    border: 1px solid ${theme.colors.primary};
    .card__image {
      height: 12rem;
      img {
        border-top-left-radius: ${theme.layout.border_radius};
        border-top-right-radius: ${theme.layout.border_radius};
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    .card__content {
      padding: ${theme.layout.medium}px;
      p {
        color: ${theme.colors.black};
        font-size: ${theme.typography.p.size};
        line-height: ${theme.typography.p.line_height};
      }
    }
    .card__heading {
      color: ${theme.colors.black};
      font-size: ${theme.typography.headings.h3.size};
      line-height: ${theme.typography.headings.h3.line_height};
      font-weight: normal;
      letter-layout: -0.25px;
      margin: 0;
    }
    .card__actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 ${theme.layout.medium}px ${theme.layout.medium}px;
    }
    .card__menu {
      justify-self: flex-end;
    }
    .card__favourite {
      margin-right: auto;
    }
  `}
`;

export default CardStyled;
