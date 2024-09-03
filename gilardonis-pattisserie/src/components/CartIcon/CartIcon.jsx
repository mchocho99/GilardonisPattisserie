import { Icon } from "../../components";

import { CartIconMid } from "../../assets";

import "./CartIcon.css";

const CartIcon = () => {
  return (
    <div id="cart-icon">
      <Icon image={CartIconMid} />
    </div>
  );
};

export default CartIcon;
