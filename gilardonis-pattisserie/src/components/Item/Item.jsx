import PropTypes from "prop-types";

import MoreIcon from "../../assets/moreIcon.png";
import MoreProduct from "../../assets/moreProducts.png";

import { ITEM_TYPE } from "./types";

import "./Item.css";

const Item = ({ image, name, prize, type }) => {
  return (
    <>
      {type === ITEM_TYPE.MORE ? (
        <div className="item">
          <img className="more-products" src={MoreProduct} alt="More Product" />
        </div>
      ) : (
        <div className="item">
          <img className="more" src={MoreIcon} alt="More Icon" />
          <img className="product" src={image} alt={name} />
          <div className="bottom">
            <span>
              {name} ${prize}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  prize: PropTypes.number,
  type: PropTypes.string,
};

export default Item;
