import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({ products: [] });
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then(({ products }) => setProducts(products))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);
  const value = { products, isLoading };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
