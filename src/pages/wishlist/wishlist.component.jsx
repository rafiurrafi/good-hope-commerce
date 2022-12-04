import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import Container from "../../componentns/common/Container/container.component";
import "./wishlist.style.scss";
import { ButtonLink } from "../../componentns/typography/typography.component";
import { useEffect } from "react";
const Wishlist = () => {
  const { products, isLoading } = useContext(ProductContext);
  function getWishlist() {
    return products.filter((product) => product.wishlist);
  }
  let wishlists = [];
  useEffect(() => {
    wishlists = getWishlist();
    console.log("wishlist rendered", wishlists, "isloading", isLoading);
  }, [products]);
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
                  <th class="name">Name</th>
                  <th class="price">Price</th>
                  <th class="qty">Qty</th>
                  <th class="status">Status</th>
                  <th class="btn"></th>
                </tr>
              </thead>
              <tbody>
                {wishlists.map((item) => (
                  <tr key={item.id}>
                    <td class="name">
                      <img src={item.thumbnail} alt="" />
                      <p>{item.name}</p>
                    </td>
                    <td class="price"></td>
                    <td class="qty"></td>
                    <td class="status"></td>
                    <td class="btn">
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
