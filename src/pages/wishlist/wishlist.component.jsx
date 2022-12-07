import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import Container from "../../componentns/common/Container/container.component";
import "./wishlist.style.scss";
import { ButtonLink } from "../../componentns/typography/typography.component";

const Wishlist = () => {
  const { products, isLoading } = useContext(ProductContext);
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
          <div className="wishlist-table__container">
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
                {wishlists.map(({ id, title, thumbnail, price }) => (
                  <tr key={id}>
                    <td className="name">
                      <img src={thumbnail} alt="" />
                      <p>{title}</p>
                    </td>
                    <td className="price">{price}</td>
                    <td className="qty"></td>
                    <td className="status"></td>
                    <td className="action">
                      <ButtonLink type="sm">Add to cart</ButtonLink>
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
