import { Article, Button, CartIcon, List } from "../../components";

import trendingProducts from "../../api/trendingProducts.json";
import newProducts from "../../api/trendingProducts.json";
import texts from "../../text/texts.json";

import macaronsImage from "../../assets/products/Macarons.jpeg";

import "./Home.css";

const Home = () => (
  <main id="home">
    <Article
      backgroundImage={macaronsImage}
      body={texts.welcome.body}
      button={texts.welcome.button}
      hasButton
      title={texts.welcome.title}
    />
    {trendingProducts && (
      <List elements={trendingProducts} title={texts.products.trending} />
    )}
    {newProducts && <List elements={newProducts} title={texts.products.news} />}
    <div id="see-more">
      <Button onClick={() => {}} text={texts.seeMore} />
    </div>
    <CartIcon />
  </main>
);

export default Home;
