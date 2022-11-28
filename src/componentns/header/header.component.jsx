import { FaFacebookF, FaTwitter, FaDribbble, FaSearch } from "react-icons/fa";
import Container from "../HOC/Container/container.component";
import { Link } from "react-router-dom";
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
        <div className="header__search-box">
          <form action="">
            <input type="text" placeholder="Search anything" />
            <button>
              <FaSearch />
            </button>
          </form>
        </div>
      </Container>
    </header>
  );
}
