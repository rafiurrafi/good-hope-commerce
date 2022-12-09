import "./menu-dropdown.style.scss";
import dropdown from "./dropdown.png";
import { Link } from "react-router-dom";
const MenuDropdown = () => {
  return (
    <div className="menu-dropdown">
      <button className="menu-dropdown__btn">Page</button>
      <div className="menu-dropdown__content">
        <div>
          <div className="menu-dropdown__left">
            <Link to="/">Home</Link>
            <Link to="/shop/mens-shirts">Men</Link>
            <Link to="/shop/womens-jewellery">Women</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/shop">Shop</Link>
          </div>
          <div className="menu-dropdown__right">
            <img src={dropdown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
