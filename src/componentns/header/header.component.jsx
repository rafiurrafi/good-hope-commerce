import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";
import Container from "../HOC/Container/container.component";
import "./header.style.scss";

export function HeaderTop() {
  return (
    <div className="header-top">
      <Container>
        <div className="header-top__login">
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
        <div className="header-top__icons">
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaDribbble />
          </a>
        </div>
        <div className="header-top__cart">
          <select name="" id="">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">BDT</option>
          </select>
          <a href="">Cart</a>
          <a href="">Cart</a>
        </div>
      </Container>
    </div>
  );
}
export function HeaderMain() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <ul className="header__menus"></ul>
      <div className="header__search-box"></div>
    </header>
  );
}
