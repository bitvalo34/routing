// Este componente añade un pie de página.
import React from "react";
import { FaMagic } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-center py-3"
      style={{ backgroundColor: "#343a40", color: "#fff" }}
    >
      <p>
        <FaMagic /> One Click Store
      </p>
    </footer>
  );
};

export default Footer;
