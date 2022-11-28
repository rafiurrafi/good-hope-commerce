import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";
import { HiRss } from "react-icons/hi";
import { GiBee } from "react-icons/gi";
import Container from "../HOC/Container/container.component";
import { Link } from "react-router-dom";
import "./header.style.scss";
import Searchbar from "../searchbar/searchbar.component";

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
          <a href="">
            <GiBee />
          </a>
          <a href="">
            <HiRss />
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
      <Container>
        <div className="header__logo">Logo</div>
        <ul className="header__menus">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Men</Link>
          </li>
          <li>
            <Link to="/">Women</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Pages</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
        <Searchbar />
      </Container>
    </header>
  );
}
