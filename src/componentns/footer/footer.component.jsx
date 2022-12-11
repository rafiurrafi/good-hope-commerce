import { Link } from "react-router-dom";
import Container from "../common/Container/container.component";
import { H1, H4 } from "../typography/typography.component";
import "./footer.style.scss";
import {
  FaLocationArrow,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaDribbble,
} from "react-icons/fa";
import { BsPhone, BsEnvelopeOpen } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { TfiTwitter } from "react-icons/tfi";

import img1 from "./assets/01.jpg";
import img2 from "./assets/02.jpg";
import img3 from "./assets/03.jpg";
import img4 from "./assets/04.jpg";
import img5 from "./assets/05.jpg";
import img6 from "./assets/06.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <div>
            <H4 color="white">Contact Us</H4>
            <div className="footer__contact">
              <div className="footer__icon">
                <FaLocationArrow />
              </div>
              <p>Your address goes here</p>
            </div>
            <div className="footer__contact">
              <div className="footer__icon">
                <BsEnvelopeOpen />
              </div>
              <p>demo@example.com</p>
            </div>
            <div className="footer__contact">
              <div className="footer__icon">
                <BsPhone />
              </div>
              <p>+880 - 123 456 789</p>
            </div>
          </div>
          <div className="footer__links">
            <H4 color="white">Quick Links</H4>
            <Link to="/">Home</Link>
            <Link to="/">Shop</Link>
            <Link to="/">Cart</Link>
            <Link to="/">Checkout</Link>
            <Link to="/">Compare</Link>
          </div>
          <div>
            <H4 color="white">Instagram</H4>
            <div className="footer__insta">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
            </div>
          </div>
          <div>
            <H4 color="white">Newsletters</H4>
            <div className="footer__newsLetter">
              <div className="footer__input">
                <input type="text" placeholder="Enter email" />
                <button>
                  <BiRightArrowAlt />
                </button>
              </div>
            </div>
            <H4>Social Network</H4>
            <div className="footer__social-icons">
              <button className="footer__icon footer__icon-bg">
                <FaFacebookF />
              </button>
              <button className="footer__icon footer__icon-bg">
                <TfiTwitter />
              </button>
              <button className="footer__icon footer__icon-bg">
                <FaLinkedinIn />
              </button>
              <button className="footer__icon footer__icon-bg">
                <FaPinterestP />
              </button>
              <button className="footer__icon footer__icon-bg">
                <FaDribbble />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
