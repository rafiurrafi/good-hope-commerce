import { MdCompareArrows } from "react-icons/md";
import { BsSuitHeart, BsEye } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonIcon, H4 } from "../typography/typography.component";
import "./product-card.style.scss";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { id, thumbnail, price, title, rating } = product;

  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={thumbnail} alt="" />
        <div className="product-card__content">
          <div>
            <H4>
              <Link to={`/products/${id}`}>{title}</Link>{" "}
            </H4>
            <p>${price}</p>
          </div>
          <div>{rating}</div>
        </div>
      </div>
      <div className="product-card__overlay">
        <div className="product-card__icons">
          <ButtonIcon icon={<AiOutlineShoppingCart />} />
          <ButtonIcon icon={<BsSuitHeart />} />
          <ButtonIcon icon={<MdCompareArrows />} />
          <ButtonIcon icon={<BsEye />} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
