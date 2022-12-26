import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";
import { HiRss } from "react-icons/hi";
import { GiBee } from "react-icons/gi";
import { RiHeartLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import Container from "../common/Container/container.component";
import { Link, NavLink } from "react-router-dom";
import "./header.style.scss";
import Searchbar from "../searchbar/searchbar.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signUserOut } from "../../utils/firebase.utils";
import MenuDropdown from "../common/menu-dropdown/menu-dropdown.component";
import { useState } from "react";
import { useClickOutside } from "../../utils/utils";
export function HeaderTop() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const domRef = useClickOutside(() => setIsCartOpen(false));
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
            ref={domRef}
            className="header-top__cart-icon"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <button href="">
              <BsCart4 />
            </button>
            {cartCount && (
              <div className="header-top__cart-count">{cartCount}</div>
            )}
            {isCartOpen && <CartDropdown />}
          </div>
        </div>
      </Container>
    </div>
  );
}
export function HeaderMain() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useClickOutside(() => setShowMenu(false));
  return (
    <header className="header">
      <Container>
        <Link to="/" className="header__logo">
          Logo
        </Link>
        <ul className="header__menus">
          <li>
            <NavLink
              className={({ isActive }) =>
                `header-menu__links ${isActive ? "active" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `header-menu__links ${isActive ? "active" : ""}`
              }
              to="/shop/mens-shirts"
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `header-menu__links ${isActive ? "active" : ""}`
              }
              to="/shop/womens-jewellery"
            >
              Women
            </NavLink>
          </li>
          <li>
            <MenuDropdown />
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `header-menu__links ${isActive ? "active" : ""}`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `header-menu__links ${isActive ? "active" : ""}`
              }
              to="/shop/all"
            >
              Shop
            </NavLink>
          </li>
        </ul>
        <Searchbar />
        <div ref={menuRef} className="header__hum-btn">
          <button onClick={() => setShowMenu(!showMenu)}>
            <BiMenu />
          </button>
          <div className={`header__menus-mobile ${showMenu ? "active" : ""}`}>
            <ul className="header__menus">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `header-menu__links ${isActive ? "active" : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `header-menu__links ${isActive ? "active" : ""}`
                  }
                  to="/shop/mens-shirts"
                >
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `header-menu__links ${isActive ? "active" : ""}`
                  }
                  to="/shop/womens-jewellery"
                >
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `header-menu__links ${isActive ? "active" : ""}`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `header-menu__links ${isActive ? "active" : ""}`
                  }
                  to="/shop/all"
                >
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}
