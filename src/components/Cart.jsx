import { useContext } from "react";
import CartContext from "./Context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div className="text-center mt-10 text-gray-500">Tu carrito está vacío 🛒</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Carrito de compras</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <div>
              <h3 className="font-semibold">{item.nombre}</h3>
              <p>Cantidad: {item.count}</p>
              <p>Precio unitario: ${item.precio}</p>
              <p>Total: ${item.precio * item.count}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${cartTotal()}</p>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          >
            Vaciar carrito
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Ir al checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
