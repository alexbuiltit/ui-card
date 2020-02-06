import React from "react";
import CardStyled from "./Card.styled";

const Card = () => {
  return (
    <CardStyled>
      <div className="card__content">
        <h3 className="card__heading">Card heading</h3>
      </div>
    </CardStyled>
  );
};

export default Card;
