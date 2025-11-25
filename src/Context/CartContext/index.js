import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cart");
    return savedItems ? JSON.parse(savedItems) : [];
  });

// const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const getItemQuantity = (id) => {
  const item = cartItems.find((i) => i.id === id);
  return item ? item.quantity : 0;
};


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addCartItem = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeCartItem = (id) => {
    setCartItems((prev) => {
      return prev
        .map((i) =>
          i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0);
    });
  };

  const deleteCartItem = (id) => {
  setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
};


  return (
    <CartContext.Provider value={{ cartItems, removeCartItem, addCartItem, getItemQuantity, deleteCartItem }}>
      {children }
    </CartContext.Provider>
  );
};

