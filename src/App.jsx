// Este componente define las rutas.
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import CartDetail from "./components/CartDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Barra de navegación */}
      <NavbarComponent />

      {/* Contenedor principal */}
      <div
        className="container mt-4"
        style={{
          backgroundColor: "#f8f9fa",
          minHeight: "80vh",
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartDetail />} />
        </Routes>
      </div>

      {/* Pie de página */}
      <Footer />
    </Router>
  );
}

export default App;
