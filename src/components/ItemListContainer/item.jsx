import { useNavigate } from 'react-router';

function Item({ item }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden">
      <div className="bg-white h-64 flex items-center justify-center p-4">
        <img
          className="max-h-full max-w-full object-contain"
          src={item.imagen}
          alt={item.nombre}
        />
      </div>

      <div className="flex flex-col justify-between p-4 h-full">
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-1 capitalize">{item.nombre}</h2>
          <p className="text-sm text-gray-600 mb-2">{item.descripcion}</p>
          <p className="text-green-600 font-bold text-lg">$ {item.precio.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Stock: {item.stock ?? 'N/A'}</p>
        </div>

        <button
          onClick={() => navigate(`/item/${item.id}`)}
          className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition font-semibold"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

export default Item;
