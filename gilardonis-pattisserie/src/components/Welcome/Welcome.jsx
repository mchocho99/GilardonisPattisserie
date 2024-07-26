import Button from "../Button/Button";

import "./Welcome.css";

const Welcome = () => {
  const body =
    "En Gilardoni's Pâtisserie, cada día es una oportunidad para endulzar la vida con nuestras creaciones, ya que nuestra pastelería es un lugar donde la dedicación y el cariño se mezclan en cada receta. Nos encanta ser parte de tus celebraciones y momentos dulces, y estamos comprometidos a ofrecerte siempre lo mejor.";

  return (
    <div id="welcome">
      <div id="container">
        <h1 id="title">
          <span>{"¡Bienvenidos a Gilardoni's Pâtisserie!"}</span>
        </h1>
        <div id="body">
          <span>{body}</span>
        </div>
        <Button onClick={() => {}} text="¡Explora nuestras delicias!" />
      </div>
    </div>
  );
};

export default Welcome;
