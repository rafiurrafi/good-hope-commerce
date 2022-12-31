import Container from "../../componentns/common/Container/container.component";
import {
  InputWithLabel,
  SimpleCheckbox,
} from "../../componentns/common/input/input.component";
import Title from "../../componentns/title/title.component";
import "./checkout.style.scss";
import "../cart-page/cart-page.style.scss";
import {
  Button,
  ButtonLink,
} from "../../componentns/typography/typography.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const Checkout = () => {
  const { cartTotal } = useContext(CartContext);
  return (
    <div className="checkout">
      <Title title="Checkout" route="Home - Checkout Page" />
      <Container>
        <div className="checkout__address">
          <h1 className="cart-page__heading">Billing Address</h1>
          <div className="checkout__inputs">
            <InputWithLabel label="First Name" placeholder="Abdur" />
            <InputWithLabel label="Last Name" placeholder="Rahim" />
          </div>
          <div className="checkout__inputs">
            <InputWithLabel label="Email" placeholder="abcd@domain.com" />
            <InputWithLabel label="Phone" placeholder="+880 12324324" />
          </div>
          <div className="checkout__inputs">
            <InputWithLabel label="Address line 1" placeholder="Panam" />
            <InputWithLabel label="Address line 2" placeholder="Nagar" />
          </div>{" "}
          <div className="checkout__inputs">
            <InputWithLabel label="Country" placeholder="East Timur" />
            <InputWithLabel label="State" placeholder="Manilla" />
          </div>
          <SimpleCheckbox>Create an account</SimpleCheckbox>
          <SimpleCheckbox>Ship to different address</SimpleCheckbox>
        </div>
        <div className="checkout__pay">
          <div className="cart-page__summary">
            <h1 className="cart-page__heading">Checkout summary</h1>
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
              Payment
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
