import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";
import { HiRss } from "react-icons/hi";
import { GiBee } from "react-icons/gi";
import { RiHeartLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import Container from "../common/Container/container.component";
import { Link } from "react-router-dom";
import "./header.style.scss";
import Searchbar from "../searchbar/searchbar.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

export function HeaderTop() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

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
          <div className="header-top__cart-icon">
            <Link to="/wishlist">
              <RiHeartLine />
            </Link>
          </div>
          <div
            className="header-top__cart-icon"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <button href="">
              <BsCart4 />
            </button>
            {cartCount && (
              <div className="header-top__cart-count">{cartCount}</div>
            )}
          </div>
        </div>
        {isCartOpen && <CartDropdown />}
      </Container>
    </div>
  );
}
export function HeaderMain() {
  return (
    <header className="header">
      <Container>
        <Link to="/" className="header__logo">
          Logo
        </Link>
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
            <Link to="/contact">Contact</Link>
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
