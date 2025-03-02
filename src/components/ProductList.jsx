// Este componente muestra la lista de productos en forma de tarjetas con íconos y enlaces a los detalles.
import React from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

import iphone14 from "../images/iphone.png";
import galaxyS23 from "../images/s23.png";
import sony from "../images/sony.png";
import dell from "../images/dell.png";
import mac from "../images/mac.png";
import bose from "../images/bose.png";
import echoDot from "../images/amazon.png";

// Lista de productos
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

const ProductList = () => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={product.id}>
          <div className="card h-100">
            <div className="img-container-list">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
            </div>
            <div className="card-body d-flex flex-column">
              {/* Nombre del producto */}
              <h5 className="card-title">{product.name}</h5>
              {/* Descripción breve del producto */}
              <p className="card-text">{product.description}</p>
              {/* Precio del producto */}
              <h6>${product.price}</h6>
              {/* Botón para ver detalles */}
              <Link
                to={`/products/${product.id}`}
                className="btn btn-primary mt-auto"
              >
                <FaInfoCircle /> Ver Detalles
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
