import { HeaderMain, HeaderTop } from "./componentns/header/header.component";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.component";
import ProductDetails from "./pages/product-details/product-details.component";
import Wishlist from "./pages/wishlist/wishlist.component";
import CartPage from "./pages/cart-page/cart-page.component";
import Checkout from "./pages/checkout/checkout.component";
import Contact from "./pages/contact/contact.component";
import Shop from "./pages/shop/shop.component";
import Authentication from "./pages/auth/authentication.component";
import SearchPage from "./pages/search-page/search-page.component";
import SpecificShop from "./pages/specific-shop/specific-shop.component";
import Footer from "./componentns/footer/footer.component";
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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:cat" element={<SpecificShop />} />
        <Route path="/auth/:status" element={<Authentication />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
