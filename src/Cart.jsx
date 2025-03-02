// Aquí se crea el contexto global para manejar el estado del carrito.
import React, { createContext, useState } from "react";

// Creamos el contexto del carrito
export const CartContext = createContext();

// Proveedor del carrito que envuelve la aplicación
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        // Si el producto ya existe, se aumenta la cantidad
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Si es un producto nuevo, se agrega al arreglo
      return [...prevItems, { ...product, quantity }];
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
