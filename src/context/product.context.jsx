import { createContext, useEffect, useState } from "react";

function addToWishlist(products, product) {
  const existingItem = products.find((item) => item.id === product.id);
  if (existingItem)
    return products.map((item) =>
      item.id === product.id ? { ...item, wishlist: !item.wishlist } : item
    );
  return [...products, { ...product, wishlist: true }];
}

export const ProductContext = createContext({ products: [] });
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(products);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then(({ products }) => setProducts(products))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);
  function addWishlist(product) {
    setProducts(addToWishlist(products, product));
  }
  const value = { products, isLoading, addWishlist };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
