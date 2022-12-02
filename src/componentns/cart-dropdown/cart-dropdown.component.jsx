import { ButtonLink } from "../typography/typography.component";
import "./cart-dropdown.style.scss";
const CartDropdown = () => {
  return (
    <div className="card-dropdown">
      <div>Cart Dropdown</div>
      <ButtonLink to="/">Checkout</ButtonLink>
    </div>
  );
};

export default CartDropdown;
