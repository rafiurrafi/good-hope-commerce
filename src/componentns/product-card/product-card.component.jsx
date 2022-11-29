import { MdCompareArrows } from "react-icons/md";
import { BsSuitHeart, BsEye } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonIcon, H4 } from "../typography/typography.component";
import img from "../product-timer/img/timer-boy.jpg";
import "./product-card.style.scss";
const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={img} alt="" />
        <div className="product-card__content">
          <div>
            <H4>T-shirt man</H4>
            <p>$220</p>
          </div>
          <div>Rating</div>
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
