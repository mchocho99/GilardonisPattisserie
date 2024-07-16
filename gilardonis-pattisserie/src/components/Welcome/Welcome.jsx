import Button from "../Button/Button";

import "./Welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="container">
        <h1 className="text">
          <span>¡Bienvenida a la web!</span>
        </h1>
        <Button onClick={() => {}} text="Comenzar a comprar" />
      </div>
    </div>
  );
};

export default Welcome;
