import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
     const [cartItems, setCartItems] = useState([]);
     const [favorites, setFavorites] = useState([]);

     const addToCart = (product) => {
          setCartItems([...cartItems, product]);
     };

     const removeFromCart = (productId) => {
          setCartItems(cartItems.filter(item => item.id !== productId));
     };

     const cartItemCount = cartItems.length;

     const addToFavorites = (product) => {
          setFavorites([...favorites, product]);
     };

     useEffect(() => {
          if (cartItems.length > 0) {
               localStorage.setItem("cart-items", JSON.stringify(cartItems))
          }
          if (favorites.length > 0) {
               localStorage.setItem("favorite-items", JSON.stringify(favorites))
          }
     }, [cartItems, favorites])

     return (
          <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartItemCount, addToFavorites }}>
               {children}
          </CartContext.Provider>
     );
};
