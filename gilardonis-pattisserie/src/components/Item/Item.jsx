import PropTypes from "prop-types";

import MoreIcon from "../../assets/moreIcon.png";

import "./Item.css";

const Item = ({ image, name, prize }) => {
  return (
    <div className="item">
      <img className="more" src={MoreIcon} />
      <img className="product" src={image} alt={name} />
      <div className="bottom">
        <span>
          {name} ${prize}
        </span>
      </div>
    </div>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  prize: PropTypes.number.isRequired,
};

export default Item;
