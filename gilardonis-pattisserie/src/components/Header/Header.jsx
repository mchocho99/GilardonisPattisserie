import PropTypes from "prop-types";

import "./Header.css";

const Header = ({ image }) => (
  <header id="header">
    <img id="logo" src={image} />
  </header>
);

Header.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Header;
