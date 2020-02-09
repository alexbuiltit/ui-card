import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import clickOutside from "../../helpers/clickOutside";
import MenuStyled from "./Menu.styled";

const menuIcon = (
  <svg
    viewBox="0 0 86 405"
    width="86"
    height="405"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M43 319c23.748 0 43 19.252 43 43s-19.252 43-43 43-43-19.252-43-43 19.252-43 43-43zm0-160c23.748 0 43 19.252 43 43s-19.252 43-43 43-43-19.252-43-43 19.252-43 43-43zm.5-159C66.972 0 86 19.028 86 42.5S66.972 85 43.5 85 1 65.972 1 42.5 20.028 0 43.5 0z"
      fill="#2A2941"
      fillRule="evenodd"
    />
  </svg>
);
const Menu = ({ className, children }) => {
  if (!children) return null;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  clickOutside(menuRef, () => setShowMenu(false));
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <MenuStyled className={className} ref={menuRef}>
      <button
        className="menu__toggle"
        aria-haspopup="true"
        aria-expanded={showMenu}
        onClick={() => handleMenuToggle()}
      >
        {menuIcon}
      </button>
      <div className={`menu ${showMenu ? "visible" : "hidden"}`} role="menu">
        {children}
      </div>
    </MenuStyled>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
export default Menu;
