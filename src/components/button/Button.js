import React from "react";
import PropTypes from "prop-types";

import ButtonStyled from "./Button.styled";
const Button = ({ action, label }) => {
  if (!action) return <ButtonStyled>{label}</ButtonStyled>;
  return <ButtonStyled onClick={() => action()}>{label}</ButtonStyled>;
};

Button.propTypes = {
  action: PropTypes.func,
  label: PropTypes.string.isRequired
};

export default Button;
