// Este componente muestra la barra de navegación superior con enlaces y un ícono de carrito.
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { CartContext } from "../Cart";
import { FaHome, FaShoppingCart } from "react-icons/fa";

const NavbarComponent = () => {
  const { cartItems } = useContext(CartContext);
  // Calcular la cantidad total de artículos en el carrito
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Enlace a la página principal */}
        <Navbar.Brand as={Link} to="/">
          <FaHome /> Product Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart /> Carrito{" "}
              {totalItems > 0 && <Badge bg="danger">{totalItems}</Badge>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
