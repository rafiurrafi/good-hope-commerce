import { MdCompareArrows } from "react-icons/md";
import { BsSuitHeart, BsEye, BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonIcon, H4 } from "../typography/typography.component";
import "./product-card.style.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ProductContext } from "../../context/product.context";
import StarRatings from "react-star-ratings";
const ProductCard = ({ product }) => {
  const { id, thumbnail, price, title, rating } = product;
  const { cartItems, addCartItem } = useContext(CartContext);
  const { addWishlist } = useContext(ProductContext);
  function handleAddCart(product) {
    addCartItem(product);
  }
  console.log(cartItems);
  return (
    <>
      <div className="product-card">
        <div className="product-card__img">
          <img src={thumbnail} alt="" />
          <div className="product-card__content">
            <div>
              <H4>
                <Link to={`/products/${id}`}>{title}</Link>{" "}
                {product.wishlist && <BsSuitHeartFill />}
              </H4>
              <p>${price}</p>
            </div>
            <div>
              {" "}
              <StarRatings
                rating={rating}
                starDimension="10px"
                starSpacing="2px"
                starRatedColor="rgb(212,175,55)"
              />
            </div>
          </div>
        </div>
        <div className="product-card__overlay">
          <div className="product-card__icons">
            <span onClick={() => handleAddCart(product)}>
              <ButtonIcon icon={<AiOutlineShoppingCart />} />
            </span>
            <span onClick={() => addWishlist(product)}>
              {product.wishlist ? (
                <ButtonIcon icon={<BsSuitHeartFill />} />
              ) : (
                <ButtonIcon icon={<BsSuitHeart />} />
              )}
            </span>
            <span>
              <ButtonIcon icon={<MdCompareArrows />} />
            </span>
            <span>
              <ButtonIcon icon={<BsEye />} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export function ProductcardMini({ product: image, title, price }) {
  return (
    <div className="p-card-mini">
      <div className="p-card-mini__img">
        <img src={image} alt="" />
      </div>
      <div className="p-card-mini__content">
        <h3>{title}</h3>
        <p>{price.current.value}</p>
        <div className="p-card-mini__icons">
          {" "}
          <ButtonIcon icon={<AiOutlineShoppingCart />} />
          <ButtonIcon icon={<BsEye />} />
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
