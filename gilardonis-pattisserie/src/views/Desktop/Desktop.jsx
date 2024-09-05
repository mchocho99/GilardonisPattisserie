import { Slider, Text, Top } from "../../components/index";

import Merenguitos from "../../assets/products/Merenguitos.jpeg";

import "./Desktop.css";

const Desktop = () => {
  return (
    <div id="desktop">
      <Top />
      <div id="body">
        <div id="slider">
          <Slider />
          <Text />
        </div>
        <div id="image-container">
          <img id="mobile-image" src={Merenguitos} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
