import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";

function addItemToCart(cartItems, itemToAdd) {
  const foundItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (foundItem)
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
}
function removeItemFromCart(cartItems, itemToRemove) {
  const foundItem = cartItems.find((item) => item.id === itemToRemove.id);
  if (foundItem.quantity === 1)
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
}
function clearItemFromCart(cartItems, item) {
  return cartItems.filter((itm) => itm.id !== item.id);
}
export const CartContext = createContext({
  cartItems: [],
  addCartItem: () => null,
  removeCartItem: () => {},
  clearCartItem: () => {},
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
  setIsCartOpen: () => false,
});
const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 9,
      title: "Infinix INBOOK",
      description: "Infinix Inbook X1 Ci3 10th 8GB...",
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      quantity: 1,
    },
  ]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  function addCartItem(itemToAdd) {
    setCartItems(addItemToCart(cartItems, itemToAdd));
  }
  function removeCartItem(item) {
    setCartItems(removeItemFromCart(cartItems, item));
  }
  function clearCartItem(item) {
    setCartItems(clearItemFromCart(cartItems, item));
  }
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);
  const value = {
    cartItems,
    addCartItem,
    cartCount,
    cartTotal,
    clearCartItem,
    isCartOpen,
    setIsCartOpen,
    removeCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
