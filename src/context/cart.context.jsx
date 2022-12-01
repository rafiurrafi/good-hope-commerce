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
export const CartContext = createContext({
  cartItems: [],
  addCartItem: () => null,
  removeCartItem: () => {},
  clearCartItem: () => {},
});
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  function addCartItem(itemToAdd) {
    setCartItems(addItemToCart(cartItems, itemToAdd));
  }
  const value = { cartItems, addCartItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
