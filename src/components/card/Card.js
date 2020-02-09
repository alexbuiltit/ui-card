import React from "react";
import PropTypes from "prop-types";
import truncateString from "../../helpers/truncateString";
import CardStyled from "./Card.styled";
import Menu from "../menu/Menu";
import Button from "../button/Button";
import Favourite from "../favourite/Favourite";

const Card = ({ image, title, subTitle, text, showMenu, showFav }) => {
  return (
    <CardStyled>
      {image && (
        // Image has empty alt text so screenreaders know that it isn't necessary for them to notify the user of the image
        <div className="card__image">
          <img src={image} alt="" />
        </div>
      )}
      <div className="card__content">
        {title && (
          // The title gets truncated to 30 characters
          <h3 className="card__heading">{truncateString(title, 30)}</h3>
        )}
        {subTitle && <small>{subTitle}</small>}
        {text && <p>{text}</p>}
      </div>
      {(showMenu || showFav) && (
        <div className="card__actions">
          {showFav && <Favourite className="card__favourite" />}
          {showMenu && (
            // Menu allows for children items so you can add whichever components you like to appear in the menu
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
  subTitle: PropTypes.string,
  showMenu: PropTypes.bool,
  showFav: PropTypes.bool
};

export default Card;
