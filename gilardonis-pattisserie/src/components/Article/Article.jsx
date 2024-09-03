import PropTypes from "prop-types";

import { Button } from "../../components";

import "./Article.css";

const Article = ({
  backgroundImage = null,
  body,
  button = "",
  hasButton = false,
  title,
}) => (
  <div className="article">
    {backgroundImage && <img src={backgroundImage} />}
    <div className="container">
      <h1 className="title">
        <span>{title}</span>
      </h1>
      <div className="body">
        <span>{body}</span>
      </div>
      {hasButton && <Button onClick={() => {}} text={button} />}
    </div>
  </div>
);

Article.propTypes = {
  backgroundImage: PropTypes.string,
  body: PropTypes.string.isRequired,
  button: PropTypes.string,
  hasButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Article;
