import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../theme/GlobalStyles";
import theme from "../../theme";
import Card from "./Card";
import thumbnail from "./thumbnail.jpg";

const cardContent = {
  title: "Countdown Announcement - This has a really long title",
  subTitle: "Last edited 2 days ago",
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
  .add("Default", () => (
    <Card title={cardContent.title} subTitle={cardContent.subTitle} />
  ))
  .add("With menu", () => (
    <Card title={cardContent.title} subTitle={cardContent.subTitle} showMenu />
  ))
  .add("With text & favourite", () => (
    <Card
      title={cardContent.title}
      subTitle={cardContent.subTitle}
      text={cardContent.text}
      showMenu
      showFav
    />
  ))
  .add("With image", () => (
    <Card
      title={cardContent.title}
      subTitle={cardContent.subTitle}
      text={cardContent.text}
      image={cardContent.image}
      showMenu
      showFav
    />
  ));
