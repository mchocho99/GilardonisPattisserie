import texts from "../../text/texts.json";

import "./Top.css";

const Top = () => {
  return (
    <div id="top">
      <div id="principal">{texts.desktop.principal}</div>
      <div id="secondary">
        <div>{texts.desktop.secondary_1}</div>
        <div>{texts.desktop.secondary_2}</div>
      </div>
    </div>
  );
};

export default Top;
