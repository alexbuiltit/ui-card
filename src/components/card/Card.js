import React from "react";
import CardStyled from "./Card.styled";
import thumbnail from "./thumbnail.jpg";
const Card = () => {
  return (
    <CardStyled>
      <div className="card__image">
        <img src={thumbnail} alt="Just an image" />
      </div>
      <div className="card__content">
        <h3 className="card__heading">Card heading</h3>
        <small>Last edited 2 days ago</small>
        <p>
          A card is a flexible and extensible content container. It includes a
          wide variety of content, thumbnails, video, images, subheadings,
          actions, and content.
        </p>
      </div>
    </CardStyled>
  );
};

export default Card;
