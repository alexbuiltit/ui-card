import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import Card from "./Card";
import thumbnail from "./thumbnail.jpg";

const cardContent = {
  title: "Countdown Announcement - This has a really long title",
  subTitle: "Last edited 2 days ago",
  text:
    "A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content.",
  image: thumbnail
};
//Add wrapper so card doesn't go full-width
const cardWrapper = story => (
  <div style={{ width: "360px", margin: "auto" }}>{story()}</div>
);

export default {
  title: "Card",
  decorators: [cardWrapper]
};

export const simple = () => (
  <Card
    title={text("Title", cardContent.title)}
    subTitle={text("Subtitle", cardContent.subTitle)}
  />
);

export const withMenu = () => (
  <Card
    title={text("Title", cardContent.title)}
    subTitle={text("Subtitle", cardContent.subTitle)}
    showMenu={boolean("Show menu", true)}
  />
);
export const withText = () => (
  <Card
    title={text("Title", cardContent.title)}
    subTitle={text("Subtitle", cardContent.subTitle)}
    text={text("Text", cardContent.text)}
    showMenu={boolean("Show menu", true)}
  />
);
export const withFavourite = () => (
  <Card
    title={text("Title", cardContent.title)}
    subTitle={text("Subtitle", cardContent.subTitle)}
    text={text("Text", cardContent.text)}
    showMenu={boolean("Show menu", true)}
    showFav={boolean("Show facourite", true)}
  />
);
export const withImage = () => (
  <Card
    title={text("Title", cardContent.title)}
    subTitle={text("Subtitle", cardContent.subTitle)}
    text={text("Text", cardContent.text)}
    image={text("Image", cardContent.image)}
    showMenu={boolean("Show menu", true)}
    showFav={boolean("Show facourite", true)}
  />
);
