import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import Container from "../../componentns/common/Container/container.component";
import "./wishlist.style.scss";
import {
  ButtonIcon,
  ButtonLink,
} from "../../componentns/typography/typography.component";
import { HiOutlinePlus, HiMinus } from "react-icons/hi";
import { GiCrossMark } from "react-icons/gi";
import InputWithButton from "../../componentns/common/input/input.component";
import { CartContext } from "../../context/cart.context";
const Wishlist = () => {
  const { products, isLoading } = useContext(ProductContext);
  const { cartItems, addCartItem, removeCartItem, clearCartItem } =
    useContext(CartContext);
  function getWishlist() {
    return products.filter((product) => product.wishlist);
  }
  const wishlists = getWishlist() || [];

  return (
    <div>
      <Container>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="cart-table__container">
            <table className="wishlist-table">
              <thead>
                <tr>
                  <th className="name">Name</th>
                  <th className="price">Price</th>
                  <th className="qty">Qty</th>
                  <th className="status">Status</th>
                  <th className="action"></th>
                </tr>
              </thead>
              <tbody>
                {wishlists.map((item) => (
                  <tr key={item.id}>
                    <td className="name">
                      <div>
                        <img src={item.thumbnail} alt="" /> <p>{item.title}</p>
                      </div>
                    </td>
                    <td className="price">{item.price}</td>
                    <td className="quantity">
                      <span onClick={() => removeCartItem(item)}>
                        <ButtonIcon icon={<HiMinus />} />
                      </span>
                      <span
                        style={{ display: "inline-block", padding: "0 1rem" }}
                      >
                        {item.quantity}
                      </span>
                      <span onClick={() => addCartItem(item)}>
                        <ButtonIcon icon={<HiOutlinePlus />} />
                      </span>
                    </td>
                    <td className="total">{item.quantity * item.price}</td>
                    <td className="action">
                      <span onClick={() => clearCartItem(item)}>
                        <ButtonIcon icon={<GiCrossMark />} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
