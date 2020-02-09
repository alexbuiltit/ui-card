import React from "react";
import PropTypes from "prop-types";
import LayoutStyled from "./Layout.styled";
const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
