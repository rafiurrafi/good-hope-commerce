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
  const { cartItems, addCartItem, removeCartItem, clearCartItem } =
    useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-page">
      <Title title="Cart" route="Home - cart page" />
      <Container>
        <div className="cart-page__left">
          <div className="cart-table__container">
            {/* table started  */}
            <table>
              <caption>Statement Summary</caption>
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
                <tr>
                  <td data-label="Account">Visa - 3412</td>
                  <td data-label="Due Date">04/01/2016</td>
                  <td data-label="Amount">$1,190</td>
                  <td data-label="Period">03/01/2016 - 03/31/2016</td>
                </tr>
                {cartItems.map((item, id) => (
                  <tr key={item.id}>
                    <td data-label={tableRow[id]} className="name">
                      <div>
                        <img src={item.thumbnail} alt="" /> <p>{item.title}</p>
                      </div>
                    </td>
                    <td data-label={tableRow[id]} className="price">
                      {item.price}
                    </td>
                    <td data-label={tableRow[id]} className="quantity">
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
                    <td data-label={tableRow[id]} className="total">
                      {item.quantity * item.price}
                    </td>
                    <td data-label={tableRow[id]} className="action">
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
