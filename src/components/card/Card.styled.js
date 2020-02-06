import styled from "styled-components";

const typography = {
  headings: {
    h1: {
      size: "40px",
      line_height: "48px"
    },
    h2: {
      size: "32px",
      line_height: "40px"
    },
    h3: {
      size: "24px",
      line_height: "32px"
    },
    h4: {
      size: "20px",
      line_height: "28px"
    }
  }
};
const themeObject = {
  card: {
    border: "1px solid #d2d7df",
    border_radius: "5px",
    content: {
      background: "#fff"
    }
  }
};

const CardStyled = styled.div`
  display: block;
  border: ${themeObject.card.border};
  border-radius: ${themeObject.card.border_radius};
  .card__content {
    background: ${themeObject.card.content.background};
  }
  .card__heading {
    font-size: ${typography.headings.h3.size};
    line-height: ${typography.headings.h3.line_height};
  }
`;

export default CardStyled;
