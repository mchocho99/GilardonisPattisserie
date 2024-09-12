import PropTypes from "prop-types";

import "./Top.css";

const Top = ({ principal, secondary_1, secondary_2 }) => {
  return (
    <div id="top">
      <div id="principal">{principal}</div>
      <div id="secondary">
        <div>{secondary_1}</div>
        <div>{secondary_2}</div>
      </div>
    </div>
  );
};

Top.propTypes = {
  principal: PropTypes.string.isRequired,
  secondary_1: PropTypes.string.isRequired,
  secondary_2: PropTypes.string.isRequired,
};

export default Top;
