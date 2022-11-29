import "./single-fashion.style.scss";
import boy from "./img/fashion-boy.jpg";
import girl from "./img/fashion-girl.jpg";
import {
  ButtonLink,
  HeadingLink,
  SmallText,
} from "../typography/typography.component";
const SingleFashion = () => {
  return (
    <div className="single-fashion">
      <div className="single-fashion__img">
        <img src={boy} alt="" />
      </div>
      <div className="single-fashion__content">
        <HeadingLink>Best Collection For men</HeadingLink>
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
