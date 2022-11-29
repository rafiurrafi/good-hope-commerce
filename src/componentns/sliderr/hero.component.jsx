import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { SubHeading } from "../typography/typography.component";
import slider1 from "./img/slider-1.jpg";
import slider2 from "./img/slider-2.jpg";
import "./hero.style.scss";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="hero">
      <Slider {...settings}>
        <div className="hero__single">
          <img src={slider1} className="hero__img" alt="" />
          <div className="hero__text">
            <SubHeading color="black">Best Collection</SubHeading>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
