import { Button, CartIcon, List, Welcome } from "../../components";

import trendingProducts from "../../api/trendingProducts.json";
import newProducts from "../../api/trendingProducts.json";

import "./Home.css";

const Home = () => {
  return (
    <main id="home">
      <Welcome />
      {trendingProducts && (
        <List elements={trendingProducts} title="Productos en tendencia" />
      )}
      {newProducts && <List elements={newProducts} title="Nuevos productos" />}
      <div id="see-more">
        <Button onClick={() => {}} text="Ver más" />
      </div>
      <CartIcon />
    </main>
  );
};

export default Home;
