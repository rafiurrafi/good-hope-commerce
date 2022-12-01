import { HeaderMain, HeaderTop } from "./componentns/header/header.component";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.component";
import ProductDetails from "./pages/product-details/product-details.component";
const App = () => {
  return (
    <div>
      <HeaderTop />
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
