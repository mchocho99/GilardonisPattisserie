import PropTypes from "prop-types";

import Item from "../Item";

import "./List.css";

const List = ({ elements, title = null }) => {
  return (
    <div className="list">
      <h2 className="title">{title}</h2>
      <div className="carroussel">
        {elements.map((element) => (
          <Item key={element.id} {...element} />
        ))}
      </div>
      <Item />
    </div>
  );
};

List.propTypes = {
  elements: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default List;
