import { HeaderMain, HeaderTop } from "./componentns/header/header.component";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "./componentns/footer/footer.component";
import Loading from "./componentns/common/loading/loading.component";

const Home = lazy(() => import("./pages/home/home.component"));
const ProductDetails = lazy(() =>
  import("./pages/product-details/product-details.component")
);
const Wishlist = lazy(() => import("./pages/wishlist/wishlist.component"));
const CartPage = lazy(() => import("./pages/cart-page/cart-page.component"));
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));
const Contact = lazy(() => import("./pages/contact/contact.component"));
const Shop = lazy(() => import("./pages/shop/shop.component"));
const Authentication = lazy(() =>
  import("./pages/auth/authentication.component")
);
const SearchPage = lazy(() =>
  import("./pages/search-page/search-page.component")
);
const SpecificShop = lazy(() =>
  import("./pages/specific-shop/specific-shop.component")
);
function LoaderContainer() {
  return (
    <div className="loader-container">
      <Loading />
    </div>
  );
}

const App = () => {
  return (
    <Suspense fallback={<LoaderContainer />}>
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
        <Route path="/shop/all" element={<Shop />} />
        <Route path="/shop/:cat" element={<SpecificShop />} />
        <Route path="/auth/:status" element={<Authentication />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default App;
