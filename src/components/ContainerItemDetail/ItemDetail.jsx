import ItemCount from "../ItemCount";

function ItemDetail({ prod }) {
  return (
    <div className="bg-yellow-50 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-3xl shadow-lg max-w-5xl w-full grid md:grid-cols-2 gap-8 p-8">
        <div className="flex justify-center items-center">
          <img
            src={prod.imagen}
            alt={prod.nombre}
            className="max-h-96 object-contain w-full"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{prod.nombre}</h1>
            <p className="text-lg text-gray-600">{prod.descripcion}</p>
            <p className="text-green-700 text-2xl font-bold mt-4">
              $ {prod.precio}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              En stock: {prod.stock ?? "N/A"}
            </p>
          </div>
          <ItemCount item={prod} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
