import { HeaderMain, HeaderTop } from "./componentns/header/header.component";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.component";
import ProductDetails from "./pages/product-details/product-details.component";
import Wishlist from "./pages/wishlist/wishlist.component";
import CartPage from "./pages/cart-page/cart-page.component";
const App = () => {
  return (
    <div>
      <HeaderTop />
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
