import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../theme/GlobalStyles";
import theme from "../../theme";
import Card from "../card/Card";
import Layout from "./Layout";

const cardContent = {
  title: "Countdown Announcement - This has a really long title",
  text:
    "A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content."
};

storiesOf("Layouts", module)
  .addDecorator(story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {story()}
    </ThemeProvider>
  ))
  .add("Two col", () => (
    <Layout>
      <Card title={cardContent.title} text={cardContent.text} />
      <Card title={cardContent.title} text={cardContent.text} />
    </Layout>
  ))
  .add("Three col", () => (
    <Layout>
      <Card title={cardContent.title} text={cardContent.text} />
      <Card title={cardContent.title} text={cardContent.text} />
      <Card title={cardContent.title} text={cardContent.text} />
    </Layout>
  ))
  .add("Four col", () => (
    <Layout>
      <Card title={cardContent.title} text={cardContent.text} />
      <Card title={cardContent.title} text={cardContent.text} />
      <Card title={cardContent.title} text={cardContent.text} />
      <Card title={cardContent.title} text={cardContent.text} />
    </Layout>
  ));
