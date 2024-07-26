import PropTypes from "prop-types";

import "./Item.css";

const Item = ({ image, name, prize }) => {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <div className="bottom">
        <span>
          {name} ${prize}
        </span>
        {/*<img src={cartIconMin} alt="Icono de carrito" />*/}
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
