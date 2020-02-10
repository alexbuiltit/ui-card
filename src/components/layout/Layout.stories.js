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

export default {
  title: "Layouts"
};

export const twoCol = () => (
  <Layout>
    <Card title={cardContent.title} text={cardContent.text} />
    <Card title={cardContent.title} text={cardContent.text} />
  </Layout>
);
export const threeCol = () => (
  <Layout>
    <Card title={cardContent.title} text={cardContent.text} />
    <Card title={cardContent.title} text={cardContent.text} />
    <Card title={cardContent.title} text={cardContent.text} />
  </Layout>
);
export const fourCol = () => (
  <Layout>
    <Card title={cardContent.title} text={cardContent.text} />
    <Card title={cardContent.title} text={cardContent.text} />
    <Card title={cardContent.title} text={cardContent.text} />
    <Card title={cardContent.title} text={cardContent.text} />
  </Layout>
);
