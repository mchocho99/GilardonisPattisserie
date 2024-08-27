import PropTypes from "prop-types";

import Item from "../Item/Item";

import { ITEM_TYPE } from "../Item/types";

import "./List.css";

const List = ({ className = null, elements, title = null }) => {
  return (
    <div className={className ? `${className} list` : "list"}>
      <h2 className="title">{title}</h2>
      <div className="carroussel">
        {elements.map((element) => (
          <Item key={element.id} type={ITEM_TYPE.ELEMENT} {...element} />
        ))}
        <Item key={-1} type={ITEM_TYPE.MORE} />
      </div>
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,
  elements: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default List;
