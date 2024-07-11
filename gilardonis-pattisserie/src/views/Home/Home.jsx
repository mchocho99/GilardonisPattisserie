import { Button, CartIcon, ItemList, Welcome } from "../../components";

import "./Home.css";

const Home = () => {
  return (
    <main id="home">
      <Welcome />
      <ItemList />
      <ItemList />
      <div id="see-more">
        <Button onClick={() => {}} text="Ver más" />
      </div>
      <CartIcon />
    </main>
  );
};

export default Home;
