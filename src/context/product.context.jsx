import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({ products: [] });
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then(({ products }) => setProducts(products))
      .catch((err) => console.error(err));
  }, []);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
