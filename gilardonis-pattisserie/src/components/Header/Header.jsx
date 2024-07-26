import { LogoTiny } from "../../assets";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <img id="logo" src={LogoTiny} />
    </header>
  );
};

export default Header;
