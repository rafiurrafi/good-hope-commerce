import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ButtonLink } from "../typography/typography.component";
import "./cart-dropdown.style.scss";
const CartDropdown = () => {
  const { cartItems, clearCartItem } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__inner">
        <h3>Cart Dropdown</h3>
        <div className="cart-dropdown__items">
          {cartItems.map((item) => (
            <div className="cart-dropdown__item">
              <div className="cart-dropdown__img">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="cart-dropdown__content">
                <h4>{item.title}</h4>
                <p>
                  {item.price}x{item.quantity}
                </p>
              </div>
              <button
                onClick={() => clearCartItem(item)}
                className="cart-dropdown__x"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="cart-dropdown__btns">
          <ButtonLink to="/" size="small">
            Checkout
          </ButtonLink>
          <ButtonLink to="/" size="small">
            View Cart
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;