// Este componente muestra los artículos en el carrito y permite modificar la cantidad o eliminarlos.
import React, { useContext, useState } from "react";
import { CartContext } from "../Cart";

const CartDetail = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [notification, setNotification] = useState("");

  // Función para manejar el cambio de cantidad
  const handleQuantityChange = (id, e) => {
    const qty = parseInt(e.target.value, 10);
    updateQuantity(id, qty);
    setNotification("¡Cantidad actualizada!");
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    setNotification("¡Item removido exitosamente!");
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  return (
    <div>
      <h3>Carrito de Compras</h3>
      {notification && (
        <div className="alert alert-info mt-3" role="alert">
          {notification}
        </div>
      )}
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{item.name}</h5>
                <p className="mb-1">Precio: ${item.price}</p>
              </div>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                  className="form-control me-2"
                  style={{ width: "80px" }}
                />
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartDetail;
