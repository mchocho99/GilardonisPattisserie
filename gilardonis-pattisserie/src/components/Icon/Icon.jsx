import PropTypes from "prop-types";

import "./Icon.css";

const Icon = ({ image, text = "", url = "" }) => {
  return (
    <div
      className="icon"
      onClick={() => {
        console.log(url);
      }}
    >
      <div className="image">
        <img src={image} />
      </div>
      <div className="text">
        <span>{text}</span>
      </div>
    </div>
  );
};

Icon.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default Icon;
