// Este componente muestra los detalles completos del producto seleccionado y permite agregarlo al carrito.
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Cart";
import { FaCartPlus } from "react-icons/fa";
import { Modal } from "react-bootstrap";

import iphone14 from "../images/iphone.png";
import galaxyS23 from "../images/s23.png";
import sony from "../images/sony.png";
import dell from "../images/dell.png";
import mac from "../images/mac.png";
import bose from "../images/bose.png";
import echoDot from "../images/amazon.png";

// Mismo arreglo de productos que en ProductList
const products = [
  {
    id: 1,
    name: "Apple iPhone 14",
    description:
      "El iPhone 14 cuenta con un diseño innovador, rendimiento excepcional y cámaras de alta calidad.",
    price: 999,
    image: iphone14,
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    description:
      "El Galaxy S23 ofrece una experiencia fluida, pantalla impresionante y cámaras de vanguardia.",
    price: 899,
    image: galaxyS23,
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    description:
      "Auriculares con cancelación de ruido de Sony, reconocidos por su calidad de sonido y confort.",
    price: 350,
    image: sony,
  },
  {
    id: 4,
    name: "Dell XPS 15",
    description:
      "La Dell XPS 15 combina potencia y diseño elegante, ideal para profesionales creativos.",
    price: 1500,
    image: dell,
  },
  {
    id: 5,
    name: "Apple MacBook Pro 14",
    description:
      "El MacBook Pro de 14 pulgadas ofrece un rendimiento inigualable y una pantalla espectacular.",
    price: 1999,
    image: mac,
  },
  {
    id: 6,
    name: "Bose QuietComfort 35 II",
    description:
      "Auriculares Bose con cancelación de ruido, perfectos para disfrutar de un sonido claro en cualquier entorno.",
    price: 299,
    image: bose,
  },
  {
    id: 7,
    name: "Amazon Echo Dot (4th Gen)",
    description:
      "Un dispositivo inteligente compacto que trae a Alexa a tu hogar para un control intuitivo.",
    price: 50,
    image: echoDot,
  },
];

const ProductDetail = () => {
  // Se extrae el id de la URL
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  // Buscar el producto por id
  const product = products.find((p) => p.id === parseInt(id, 10));
  // Estado para la cantidad a agregar
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState("");

  // Estado para controlar el click de imagen expandida
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // Si no se encuentra el producto se muestra mensaje
  if (!product) return <h5>Producto no encontrado</h5>;

  // Función para agregar el producto al carrito
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setNotification("¡Añadido exitosamente!");
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  return (
    <>
      <div className="card mb-4">
        <div className="row g-0">
          {/* Imagen del producto */}
          <div className="col-md-6">
            <div className="img-container-detail" onClick={handleModalOpen}>
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt={product.name}
              />
            </div>
          </div>
          {/* Detalles del producto */}
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <h4>${product.price}</h4>
              <p className="card-text">{product.description}</p>
              <div className="d-flex align-items-center">
                {/* Campo para seleccionar la cantidad */}
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                  className="form-control me-2"
                  style={{ width: "80px" }}
                />
                {/* Botón para agregar al carrito */}
                <button className="btn btn-success" onClick={handleAddToCart}>
                  <FaCartPlus /> Agregar al Carrito
                </button>
              </div>
              {/* Mostrar notificación */}
              {notification && (
                <div className="alert alert-success mt-3" role="alert">
                  {notification}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal para mostrar la imagen expandida */}
      <Modal show={showModal} onHide={handleModalClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductDetail;
