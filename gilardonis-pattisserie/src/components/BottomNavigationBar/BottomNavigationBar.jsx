import Icon from "../Icon/Icon";

import ProductsIcon from "../../assets/cakeIconMid.png";
import { HomeIconMid, InstagramIconMid, MailIconMid } from "../../assets";

import "./BottomNavigationBar.css";

const options = [
  {
    image: HomeIconMid,
    text: "Inicio",
  },
  {
    image: ProductsIcon,
    text: "Delicias",
  },
  {
    image: MailIconMid,
    text: "Mail",
  },
  {
    image: InstagramIconMid,
    text: "Instagram",
  },
];

const BottomNavigationBar = () => {
  return (
    <nav id="bottom-navigator-bar">
      {options.map((option) => (
        <Icon key={option.text} image={option.image} text={option.text} />
      ))}
    </nav>
  );
};

export default BottomNavigationBar;
