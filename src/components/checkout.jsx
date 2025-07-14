import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

import { crearOrden } from "../fireBase/db";
import CartContext from "./Context/CartContext";

export function OrdenCompra() {
  const { cart, vaciarCarrito } = useContext(CartContext);
  const navigate = useNavigate();

  const handleEnviar = async (e) => {
    e.preventDefault();

    const form = e.target;
    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    const email = form.email.value;
    const telefono = form.telefono.value;
    const direccion = form.direccion.value;
    const detalles = form.detalles.value;

    if (cart.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Carrito vacío",
        text: "Agrega productos antes de comprar",
      });
      return;
    }

    try {
      const orden = {
        nombre,
        apellido,
        email,
        telefono,
        direccion,
        detalles,
        productos: cart,
        time: serverTimestamp(),
      };

      const orderId = await crearOrden(orden);

      Swal.fire({
        icon: "success",
        title: "¡Orden creada!",
        html: `
          <p>Gracias por tu compra, <strong>${nombre}</strong></p>
          <p><strong>ID de orden:</strong> ${orderId}</p>
        `,
        confirmButtonText: "Volver al inicio",
      }).then(() => {
        vaciarCarrito();
        navigate("/");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al crear la orden",
        text: "Intenta nuevamente en unos minutos.",
      });
      console.error("Error al crear la orden:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Formulario de Compra 🛒
        </h2>

        <form onSubmit={handleEnviar} className="space-y-5">

          <div>
            <label htmlFor="nombre" className="block font-medium text-gray-700">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="apellido" className="block font-medium text-gray-700">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block font-medium text-gray-700">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="direccion" className="block font-medium text-gray-700">Dirección:</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="detalles" className="block font-medium text-gray-700">
              Detalles adicionales (opcional):
            </label>
            <textarea
              id="detalles"
              name="detalles"
              rows="3"
              className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Confirmar compra
          </button>
        </form>
      </div>
    </div>
  );
}
