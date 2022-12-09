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
import { UserContext } from "../../context/user.context";
import { signUserOut } from "../../utils/firebase.utils";

export function HeaderTop() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const { user, setUser } = useContext(UserContext);
  async function handleSignOut() {
    await signUserOut();
    setUser(null);
  }
  return (
    <div className="header-top">
      <Container>
        {!user ? (
          <div className="header-top__login">
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Register</Link>
          </div>
        ) : (
          <div className="header-top__user">
            <img src="" alt="" />
            <div>
              <button>User</button>
              <div>
                <button>Profile</button>
                <button onClick={handleSignOut}>Sign out</button>
              </div>
            </div>
          </div>
        )}

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
            <Link to="/shop/mens-shirts">Men</Link>
          </li>
          <li>
            <Link to="/shop/womens-jewellery">Women</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        <Searchbar />
      </Container>
    </header>
  );
}
