import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

// Crear el root y renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
