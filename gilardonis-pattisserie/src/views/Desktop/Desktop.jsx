import { Slider, Top } from "../../components/index";

import texts from "../../text/texts.json";

import Merenguitos from "../../assets/products/Merenguitos.jpeg";

import "./Desktop.css";

const Desktop = () => {
  return (
    <div id="desktop">
      <Top
        principal={texts.desktop.principal}
        secondary_1={texts.desktop.secondary_1}
        secondary_2={texts.desktop.secondary_2}
      />
      <div id="body">
        <div id="slider">
          <Slider />
          <div id="text">{texts.desktop.slider.text}</div>
        </div>
        <img id="mobile-image" src={Merenguitos} alt="" />
      </div>
    </div>
  );
};

export default Desktop;
