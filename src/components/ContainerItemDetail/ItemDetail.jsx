import ItemCount from '../ItemCount';

function ItemDetail({ prod }) {
  return (
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow rounded">
      <div>
        <img
          className="w-full object-contain h-64 rounded"
          src={prod.imagen}
          alt={prod.nombre}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold">{prod.nombre}</h2>
        <p className="text-gray-700">{prod.descripcion}</p>
        <p className="text-green-700 font-semibold text-xl">Precio: ${prod.precio}</p>
        <p className="text-sm text-gray-600">Stock: {prod.stock} unidades</p>

        <div className="my-4">
          <ItemCount />
        </div>

        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Comprar
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
