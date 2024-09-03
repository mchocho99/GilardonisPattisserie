import { Home } from "../";
import { BottomNavigationBar, Header } from "../../components";
import { LogoBig } from "../../assets";

import "./Mobile.css";

const Mobile = () => {
  return (
    <div id="mobile">
      <Header image={LogoBig} />
      <Home />
      <BottomNavigationBar />
    </div>
  );
};

export default Mobile;
