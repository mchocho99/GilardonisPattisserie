import PropTypes from "prop-types";

import Item from "../Item/Item";

import "./List.css";

const List = ({ elements, title = null, className = null }) => {
  return (
    <div className={className ? `${className} list` : "list"}>
      <h2 className="title">{title}</h2>
      <div className="carroussel">
        {elements.map((element) => (
          <Item key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  elements: PropTypes.array.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default List;
