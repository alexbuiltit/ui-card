import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../theme/GlobalStyles";
import theme from "../../theme";
import Card from "./Card";
import thumbnail from "./thumbnail.jpg";

const cardContent = {
  title: "Card heading",
  text:
    "A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content.",
  image: thumbnail
};

storiesOf("Card", module)
  .addDecorator(story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {story()}
    </ThemeProvider>
  ))
  .add("Default", () => <Card title={cardContent.title} />)
  .add("With image", () => (
    <Card title={cardContent.title} image={cardContent.image} />
  ))
  .add("With text", () => (
    <Card
      title={cardContent.title}
      image={cardContent.image}
      text={cardContent.text}
    />
  ))
  .add("With menu", () => (
    <Card
      title={cardContent.title}
      image={cardContent.image}
      text={cardContent.text}
      showMenu
    />
  ))
  .add("With favourite", () => (
    <Card
      title={cardContent.title}
      image={cardContent.image}
      text={cardContent.text}
      showMenu
      showFav
    />
  ));
