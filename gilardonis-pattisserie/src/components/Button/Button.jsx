import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ onClick, text }) => {
  return (
    <input className="button" onClick={onClick} type="button" value={text} />
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
