import React from "react";
import PropTypes from "prop-types";
import LayoutStyled from "./Layout.styled";
const Layout = ({ columns, children }) => {
  return <LayoutStyled columns={columns || 3}>{children}</LayoutStyled>;
};

Layout.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
