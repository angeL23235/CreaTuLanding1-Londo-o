import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  const categoriaMapeada = (idRuta) => {
    const mapa = {
      ropa: 'ropa deportiva',
      figuras: 'anime',
      katanas: 'katanas',
    };
    return mapa[idRuta?.toLowerCase()] || null;
  };

  useEffect(() => {
    fetch("https://682c3697d29df7a95be60521.mockapi.io/products/products")
      .then((res) => res.json())
      .then((data) => {
        const categoria = categoriaMapeada(categoryId);

        let productos = data.filter(item =>
          item.nombre && item.descripcion && item.imagen
        );

        if (categoria) {
          productos = productos.filter(item =>
            item.categoria?.toString().toLowerCase().includes(categoria)
          );
        } else {
          productos = productos.slice(0, 9); 
        }

        setItems(productos);
      })
      .catch((err) => console.error("Error al obtener productos:", err));
  }, [categoryId]);

  return (
    <div className="p-4">
      {items.length === 0 ? (
        <p className="text-center text-gray-500">No hay productos disponibles.</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
}

export default ItemListContainer;
