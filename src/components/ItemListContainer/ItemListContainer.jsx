import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { obtenerProductos, filtrarPorCategoria } from "../../fireBase/db";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoriaProducto } = useParams();

  useEffect(() => {
    const cargar = async () => {
      const data = categoriaProducto
        ? await filtrarPorCategoria(categoriaProducto)
        : await obtenerProductos();
      console.log("Productos obtenidos:", data); 
      setItems(data);
    };
    cargar();
  }, [categoriaProducto]); // ✅ Aquí está la clave

  return <ItemList items={items} />;
}

export default ItemListContainer;
