import { useNavigate } from 'react-router'; 

function Item({ item }) { 
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow rounded p-4 max-w-sm mx-auto">
      <img className="w-full h-48 object-cover rounded" src={item.imagen} alt={item.nombre} />
      <div className="mt-2 text-center">
        <p className="text-lg font-semibold">{item.nombre}</p>
        <p className="text-gray-600">{item.descripcion}</p>
        <p className="text-green-600 font-bold">$ {item.precio}</p>
        <p className="text-sm text-gray-500">Stock: {item.stock}</p>
        <button
          onClick={() => navigate(`/item/${item.id}`)}
          className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

export default Item;
