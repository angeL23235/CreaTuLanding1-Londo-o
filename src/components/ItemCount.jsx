import { useState, useContext } from "react";
import CartContext from "../components/Context/CartContext";
import Swal from "sweetalert2";

function ItemCount({ item }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
  addToCart({ ...item, count });
  Swal.fire({
    icon: "success",
    title: "Agregado al carrito",
    text: `${item.nombre} x${count} fue agregado correctamente`,
    timer: 2000,
    showConfirmButton: false,
  });
};

  return (
    <div className="w-full max-w-xs mx-auto p-4 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700 font-medium">Cantidad:</span>

        <div className="flex items-center border rounded-lg overflow-hidden">
          <button
            onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
            disabled={count <= 1}
            className="px-3 py-1 text-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            −
          </button>
          <span className="px-4 py-1 text-lg font-semibold text-gray-800 bg-white">
            {count}
          </span>
          <button
            onClick={() => setCount((prev) => Math.min(prev + 1, item.stock))}
            disabled={count >= item.stock}
            className="px-3 py-1 text-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAdd}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition-all"
      >
        Agregar al carrito 🛒
      </button>
    </div>
  );
}

export default ItemCount;
