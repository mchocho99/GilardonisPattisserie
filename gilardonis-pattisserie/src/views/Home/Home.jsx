import { Button, CartIcon, List, Welcome } from "../../components";

import trendingProducts from "../../api/trendingProducts.json";
import newProducts from "../../api/trendingProducts.json";

import "./Home.css";

const Home = () => {
  return (
    <main id="home">
      <Welcome />
      {trendingProducts && (
        <List
          elements={trendingProducts}
          title="Delicias en tendencia"
          className="mt10px"
        />
      )}
      {newProducts && <List elements={newProducts} title="Nuevas delicias" />}
      <div id="see-more">
        <Button onClick={() => {}} text="Ver más" />
      </div>
      <CartIcon />
    </main>
  );
};

export default Home;
