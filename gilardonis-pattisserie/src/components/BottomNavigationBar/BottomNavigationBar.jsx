import Icon from "../Icon/Icon";

import {
  CakeIconMid,
  HomeIconMid,
  InstagramIconMid,
  MailIconMid,
} from "../../assets";

import "./BottomNavigationBar.css";

const options = [
  {
    image: HomeIconMid,
  },
  {
    image: CakeIconMid,
  },
  {
    image: MailIconMid,
  },
  {
    image: InstagramIconMid,
  },
];

const BottomNavigationBar = () => {
  return (
    <nav id="bottom-navigator-bar">
      <div className="inner-flex">
        {options.map((option) => (
          <Icon key={option.text} image={option.image} />
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigationBar;
