import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

function ContainerItemDetail() {
  const [prod, setProd] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    fetch("https://682c3697d29df7a95be60521.mockapi.io/products/products")
      .then(res => res.json())
      .then(data => {
        const producto = data.find(p => p.id.toString() === itemId);
        setProd(producto);
      })
      .catch(err => console.error("Error cargando producto:", err));
  }, [itemId]);

  if (!prod) {
    return <p className="text-center mt-10 text-gray-500">Cargando producto o no encontrado...</p>;
  }

  return <ItemDetail prod={prod} />;
}

export default ContainerItemDetail;
