import { useState } from "react";
import CartContext from "./CartContext";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const productCard = cart.find(prod => prod.id === item.id);
    if (productCard) {
      setCart(cart.map(product =>
        product.id === item.id
          ? { ...product, count: product.count + item.count }
          : product
      ));
    } else {
      setCart([...cart, item]);
    }
  };

  const getAmount = () => {
    return cart.reduce((acc, item) => acc + item.count, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getAmount,
        clearCart,
        removeFromCart,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
