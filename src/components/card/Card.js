import React from "react";
import PropTypes from "prop-types";
import CardStyled from "./Card.styled";
import Menu from "../menu/Menu";
const Card = ({ image, title, text }) => {
  return (
    <CardStyled>
      {image && (
        <div className="card__image">
          <img src={image} alt="Just an image" />
        </div>
      )}
      <div className="card__content">
        {title && <h3 className="card__heading">{title}</h3>}
        <small>Last edited 2 days ago</small>
        {text && <p>{text}</p>}
      </div>
      <div className="card__actions">
        {/* <div className="card__favourite">test</div> */}
        <Menu className="card__menu" />
      </div>
    </CardStyled>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
};

export default Card;
