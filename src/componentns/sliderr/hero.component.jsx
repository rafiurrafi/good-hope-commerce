// import "slick-carousel/slick/slick.css";
import slider1 from "./img/banner-1.jpg";
import slider2 from "./img/banner-2.jpg";
import slider3 from "./img/banner-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./hero.style.scss";
import Container from "../common/Container/container.component";
import {
  BigHeading,
  Button,
  SubHeading,
  ButtonLink,
} from "../typography/typography.component";
const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="hero">
      <Slider {...settings}>
        <div className="hero__single hero__single--1">
          <img src={slider1} alt="" />
          <Container>
            <BigHeading>
              <span>Discover</span> Your Exciting <br /> Journey With{" "}
              <span>US</span>
            </BigHeading>
            <SubHeading style={{ margin: "1.5rem 0" }}>
              Unleash your fear, Free your Mind, Feel your body
            </SubHeading>
            <ButtonLink to="/shop/all">Get Started</ButtonLink>
          </Container>
        </div>
        <div className="hero__single hero__single--2">
          <img src={slider2} alt="" />
          <Container>
            <BigHeading>
              <span>Discover</span> Your Exciting <br /> Journey With{" "}
              <span>US</span>
            </BigHeading>
            <SubHeading style={{ margin: "1.5rem 0" }}>
              Unleash your fear, Free your Mind, Feel your body
            </SubHeading>
            <ButtonLink to="/shop/all">Get Started</ButtonLink>
          </Container>
        </div>
        <div className="hero__single hero__single--3">
          <img src={slider3} alt="" />
          <Container>
            <BigHeading color="black">
              <span>Discover</span> Your Exciting <br /> Journey With{" "}
              <span>US</span>
            </BigHeading>
            <SubHeading style={{ margin: "1.5rem 0" }} color="black">
              Unleash your fear, Free your Mind, Feel your body
            </SubHeading>
            <ButtonLink to="/shop/all">Get Started</ButtonLink>
          </Container>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
