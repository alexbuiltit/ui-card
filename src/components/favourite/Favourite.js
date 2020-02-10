import React, { useState } from "react";
import PropTypes from "prop-types";
import FavouriteStyled from "./Favourite.styled";

const starIcon = (
  <svg
    viewBox="0 0 63 63"
    width="63"
    height="63"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M48.972 62.996c-.512 0-1.032-.13-1.513-.39l-15.89-8.738a.128.128 0 00-.133 0l-15.89 8.739a3.1 3.1 0 01-3.414-.26c-1.001-.763-1.498-2.037-1.288-3.319l3.033-18.507a.154.154 0 00-.038-.13L.982 27.287a3.48 3.48 0 01-.823-3.473c.388-1.233 1.39-2.118 2.615-2.304l17.768-2.702c.047-.008.086-.033.101-.081L28.59 1.89C29.139.722 30.249 0 31.499 0c1.249 0 2.358.722 2.909 1.89l7.945 16.837c.024.04.062.073.101.08l17.768 2.703c1.234.186 2.235 1.07 2.615 2.304a3.462 3.462 0 01-.822 3.473L49.174 40.399a.154.154 0 00-.04.13l3.035 18.507a3.462 3.462 0 01-1.288 3.319 3.19 3.19 0 01-1.91.641z"
        fill="#2A2941"
      />
      <path
        d="M32.001 47.553c.421 0 .836.105 1.22.317l12.877 7.113c.025.013.063.033.12-.006.056-.04.05-.086.043-.113l-2.463-15.072a2.867 2.867 0 01.754-2.444l10.414-10.667c.018-.02.05-.053.025-.119s-.063-.079-.088-.079l-14.392-2.2a2.642 2.642 0 01-1.98-1.512L32.102 9.066c-.013-.026-.031-.066-.1-.066-.07 0-.089.04-.101.066l-6.436 13.705c-.383.813-1.125 1.38-1.98 1.513l-14.391 2.2c-.025.006-.07.012-.088.078-.019.066.012.1.025.12l10.414 10.666c.622.634.905 1.546.754 2.444l-2.457 15.066c-.007.026-.013.072.044.112.056.04.094.02.119.007l12.87-7.114c.384-.205.805-.31 1.226-.31z"
        fill="#FFF"
      />
    </g>
  </svg>
);
const Favourite = ({ className }) => {
  //Using hooks to determine whether the star should be active or not
  const [active, setActive] = useState(false);
  return (
    <FavouriteStyled
      className={`${className} ${active ? "active" : "inactive"}`}
      onClick={() => setActive(!active)}
    >
      {starIcon}
    </FavouriteStyled>
  );
};

Favourite.propTypes = {
  className: PropTypes.string
};

export default Favourite;
