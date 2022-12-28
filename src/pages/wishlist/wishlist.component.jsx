import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import Container from "../../componentns/common/Container/container.component";
import "./wishlist.style.scss";
import "../cart-page/cart-page.style.scss";
import {
  ButtonIcon,
  ButtonLink,
} from "../../componentns/typography/typography.component";
import { HiOutlinePlus, HiMinus } from "react-icons/hi";
import { GiCrossMark } from "react-icons/gi";
import InputWithButton from "../../componentns/common/input/input.component";
import { CartContext } from "../../context/cart.context";
import Title from "../../componentns/title/title.component";
const Wishlist = () => {
  const { products, isLoading, addWishlist } = useContext(ProductContext);
  const { cartItems, addCartItem, removeCartItem, clearCartItem } =
    useContext(CartContext);
  function getWishlist() {
    return products.filter((product) => product.wishlist);
  }
  const wishlists = getWishlist() || [];
  console.log(wishlists);
  return (
    <div>
      <Title title="Wish Lists" route="" />
      <Container>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="cart-table__container">
            {wishlists.length ? (
              <table>
                <caption>
                  <h1>
                    Your <span>wishlist</span>
                  </h1>
                </caption>
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
                          <img src={item.thumbnail} alt="" />{" "}
                          <p>{item.title}</p>
                        </div>
                      </td>
                      <td className="price">{item.price}</td>
                      <td className="quantity">-</td>
                      <td className="total">{item.quantity * item.price}</td>
                      <td className="action">
                        <span onClick={() => addWishlist(item)}>
                          <ButtonIcon color="#f20c3f" icon={<GiCrossMark />} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="wishlist-empty">
                <h1>
                  No <span>wishlist</span>
                </h1>
                <ButtonLink to="/shop/all">Get Products</ButtonLink>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
