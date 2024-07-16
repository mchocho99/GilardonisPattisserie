import PropTypes from "prop-types";

const Item = ({ description, id, image, name, prize }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <span>{name}</span>
        <span>${prize}</span>
        <img src={cartIconMin} alt="Icono de carrito" />
      </div>
    </div>
  );
};

Item.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  prize: PropTypes.number.isRequired,
};

export default Item;
