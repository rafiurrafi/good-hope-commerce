import "./single-fashion.style.scss";
import boy from "./img/fashion-boy.jpg";
import girl from "./img/fashion-girl.jpg";
import { HeadingLink } from "../typography/typography.component";
const SingleFashion = () => {
  return (
    <div className="single-fashion">
      <div className="single-fashion__img">
        <img src={boy} alt="" />
      </div>
      <div className="single-fashion__content">
        <HeadingLink>Best Collection For men</HeadingLink>
      </div>
    </div>
  );
};

export default SingleFashion;
