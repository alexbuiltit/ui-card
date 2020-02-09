import React from "react";
import PropTypes from "prop-types";
import truncateString from "../../helpers/truncateString";
import CardStyled from "./Card.styled";
import Menu from "../menu/Menu";
import Button from "../button/Button";
import Favourite from "../favourite/Favourite";
const Card = ({ image, title, text, showMenu, showFav }) => {
  return (
    <CardStyled>
      {image && (
        <div className="card__image">
          <img src={image} alt="Just an image" />
        </div>
      )}
      <div className="card__content">
        {title && (
          <h3 className="card__heading">{truncateString(title, 30)}</h3>
        )}
        <small>Last edited 2 days ago</small>
        {text && <p>{text}</p>}
      </div>
      {(showMenu || showFav) && (
        <div className="card__actions">
          {showFav && <Favourite className="card__favourite" />}
          {showMenu && (
            <Menu className="card__menu">
              <Button label="Save" />
              <Button label="Edit" />
              <Button label="Preview" />
            </Menu>
          )}
        </div>
      )}
    </CardStyled>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  showMenu: PropTypes.bool,
  showFav: PropTypes.bool
};

export default Card;
