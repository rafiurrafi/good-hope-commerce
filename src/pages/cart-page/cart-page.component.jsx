import { useContext } from "react";
import Container from "../../componentns/common/Container/container.component";
import Title from "../../componentns/title/title.component";
import {
  ButtonIcon,
  ButtonLink,
} from "../../componentns/typography/typography.component";
import { CartContext } from "../../context/cart.context";
import { HiOutlinePlus, HiMinus } from "react-icons/hi";
import { GiCrossMark } from "react-icons/gi";
import "./cart-page.style.scss";
import InputWithButton from "../../componentns/common/input/input.component";
const CartPage = () => {
  const { cartItems, addCartItem, removeCartItem, clearCartItem } =
    useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-page">
      <Title title="Cart" route="Home - cart page" />
      <Container>
        <div className="cart-page__left">
          <div className="cart-table__container">
            <table className="cart-table">
              <thead className="cart-table__head">
                <tr>
                  <th className="name">Products</th>
                  <th className="price">Price</th>
                  <th className="quantity">Quantity</th>
                  <th className="total">Total</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody className="cart-table__body">
                {cartItems.map((item) => (
                  <tr>
                    <td className="name">
                      <div>
                        <img src={item.thumbnail} alt="" /> <p>{item.title}</p>
                      </div>
                    </td>
                    <td className="price">{item.price}</td>
                    <td className="quantity">
                      {" "}
                      <span onClick={() => removeCartItem(item)}>
                        <ButtonIcon icon={<HiMinus />} />
                      </span>
                      <span
                        style={{ display: "inline-block", padding: "0 1rem" }}
                      >
                        {item.quantity}
                      </span>{" "}
                      <span onClick={() => addCartItem(item)}>
                        <ButtonIcon icon={<HiOutlinePlus />} />
                      </span>
                    </td>
                    <td className="total">{item.quantity * item.price}</td>
                    <td className="action">
                      {" "}
                      <span onClick={() => clearCartItem(item)}>
                        <ButtonIcon icon={<GiCrossMark />} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="cart-page__right">
          <InputWithButton
            placeholder="Enter Coupon"
            buttonText="Apply Coupon"
          />
          <div className="cart-page__summary">
            <h1 className="cart-page__heading">cart summary</h1>
            <div>
              <p>Subtotal</p>
              <p>$150</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>$150</p>
            </div>
            <hr />

            <div style={{ fontWeight: 700 }}>
              <p>Shipping</p>
              <p>$150</p>
            </div>
            <ButtonLink className="cart-page__btn">Go to checkout</ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
