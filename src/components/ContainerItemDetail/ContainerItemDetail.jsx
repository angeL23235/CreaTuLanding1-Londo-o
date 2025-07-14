import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { obtenerUnProducto } from "../../fireBase/db"; 
import ItemDetail from "./ItemDetail";

function ContainerItemDetail() {
  const [prod, setProd] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const cargar = async () => {
      const data = await obtenerUnProducto(itemId);
      setProd(data);
    };
    cargar();
  }, [itemId]);

  if (!prod) {
    return <p className="text-center mt-10 text-gray-500">Cargando producto o no encontrado...</p>;
  }

  return <ItemDetail prod={prod} />;
}

export default ContainerItemDetail;
