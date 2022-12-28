import "./single-fashion.style.scss";
import {
  ButtonLink,
  HeadingLink,
  SmallText,
} from "../typography/typography.component";
const SingleFashion = ({ type = "", collection = "men", image }) => {
  return (
    <div
      className={`single-fashion ${
        type === "right" ? "single-fashion--right" : ""
      }`}
    >
      <div className="single-fashion__img">
        <img src={image} alt="" />
      </div>
      <div className="single-fashion__content">
        <HeadingLink>Best Collection For {collection}</HeadingLink>
        <SmallText>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </SmallText>
        <ButtonLink to="/shop">Shop Now</ButtonLink>
      </div>
    </div>
  );
};

export default SingleFashion;
