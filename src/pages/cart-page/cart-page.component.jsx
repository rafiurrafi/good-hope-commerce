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
const tableRow = ["Product", "Price", "Quantity", "Total", "Action"];
const CartPage = () => {
  const { cartItems, addCartItem, removeCartItem, clearCartItem, cartTotal } =
    useContext(CartContext);
  return (
    <div className="cart-page">
      <Title title="Cart" route="Home - cart page" />
      {cartItems.length ? (
        <Container>
          <div className="cart-page__left">
            <h1>
              Your <span>Cart</span>
            </h1>
            <div className="cart-table__container">
              {/* table started  */}

              <table>
                <thead>
                  <tr>
                    {tableRow.map((t) => (
                      <th scope="col" key={t}>
                        {t}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="name">
                        <div>
                          <img src={item.thumbnail} alt="" />{" "}
                          <p>{item.title}</p>
                        </div>
                      </td>
                      <td className="price">{item.price}</td>
                      <td className="quantity">
                        <span onClick={() => removeCartItem(item)}>
                          <ButtonIcon color="#0d779e" icon={<HiMinus />} />
                        </span>
                        <span
                          style={{ display: "inline-block", padding: "0 1rem" }}
                        >
                          {item.quantity}
                        </span>
                        <span onClick={() => addCartItem(item)}>
                          <ButtonIcon
                            color="#0d779e"
                            icon={<HiOutlinePlus />}
                          />
                        </span>
                      </td>
                      <td className="total">{item.quantity * item.price}</td>
                      <td className="action">
                        <span onClick={() => clearCartItem(item)}>
                          <ButtonIcon color="#f20c3f" icon={<GiCrossMark />} />
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
                <p>${cartTotal}</p>
              </div>
              <div>
                <p>Shipping</p>
                <p>$150</p>
              </div>
              <hr />

              <div style={{ fontWeight: 700 }}>
                <p>Shipping</p>
                <p>${cartTotal + 150}</p>
              </div>
              <ButtonLink to="/checkout" className="cart-page__btn">
                Go to checkout
              </ButtonLink>
            </div>
          </div>
        </Container>
      ) : (
        <div
          className="wishlist-empty"
          style={{ width: "70%", marginLeft: "15%" }}
        >
          <h1>
            No <span>Cart </span>Item
          </h1>
          <ButtonLink to="/shop/all">Get Products</ButtonLink>
        </div>
      )}
    </div>
  );
};

export default CartPage;
