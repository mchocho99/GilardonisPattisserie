import Button from "../Button/Button";

import "./Welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="container">
        <div className="text">
          <span>¡Bienvenida a la web!</span>
        </div>
        <Button onClick={() => {}} text="Comenzar a comprar" />
      </div>
    </div>
  );
};

export default Welcome;
