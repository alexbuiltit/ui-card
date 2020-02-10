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
        font-size: ${theme.typography.small.size};
        line-height: ${theme.typography.small.line_height};
      }
    }
    .card__heading {
      color: ${theme.colors.black};
      font-size: ${theme.typography.large.size};
      line-height: ${theme.typography.large.line_height};
      font-weight: normal;
      letter-spacing: -0.25px;
      margin: 0;
      margin-bottom: ${theme.layout.medium}px;
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
    small {
      font-size: ${theme.typography.small.size};
      line-height: ${theme.typography.small.line_height};
    }
  `}
`;

export default CardStyled;
