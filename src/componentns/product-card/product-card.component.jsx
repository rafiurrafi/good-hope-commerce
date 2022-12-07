import { MdCompareArrows } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";
import { BsSuitHeart, BsEye, BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import { HiRss } from "react-icons/hi";
import { GiBee } from "react-icons/gi";
import {
  Button,
  ButtonIcon,
  H1,
  H4,
  SmallText,
} from "../typography/typography.component";
import "./product-card.style.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ProductContext } from "../../context/product.context";
import StarRatings from "react-star-ratings";
import { useState } from "react";
// react pure modal
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
const ProductCard = ({ product }) => {
  const { id, thumbnail, price, title, rating } = product;
  const { addCartItem } = useContext(CartContext);
  const { addWishlist } = useContext(ProductContext);
  const [modal, setModal] = useState(false);
  function handleAddCart(product) {
    addCartItem(product);
  }
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
            <span onClick={() => setModal(true)}>
              <ButtonIcon icon={<BsEye />} />
            </span>
          </div>
        </div>
      </div>
      <PureModal
        width="70vw"
        isOpen={modal}
        closeButton={<ButtonIcon icon={<GiCrossMark />} />}
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <div className="modal__content">
          <div className="modal__img">
            <img src={product?.thumbnail} alt={product?.title} />
          </div>
          <div className="modal__text">
            <H1 color="gray">{product.title}</H1>
            <p className="modal__price">Best price : {product.price}</p>
            <p>
              {" "}
              <StarRatings
                rating={rating}
                starDimension="10px"
                starSpacing="2px"
                starRatedColor="rgb(212,175,55)"
              />{" "}
              <span style={{ marginLeft: 15 }}>52 ratings</span>
            </p>
            <p
              onClick={() => addCartItem(product)}
              style={{ margin: "1.5rem 0" }}
            >
              <Button>Add to cart</Button>
            </p>
            <SmallText>{product.description}</SmallText>
            <div>
              <SmallText style={{ marginBottom: 5 }}>Share the text</SmallText>
              <hr />
              <div className="modal-icons">
                <span>
                  <FaFacebookF />
                </span>

                <span>
                  <FaTwitter />
                </span>

                <span>
                  <FaDribbble />
                </span>

                <span>
                  <GiBee />
                </span>

                <span>
                  <HiRss />
                </span>
              </div>
            </div>
          </div>
        </div>
      </PureModal>
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
