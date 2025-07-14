import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import CartProvider from './components/Context/CartProvider';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContainerItemDetail from './components/ContainerItemDetail/ContainerItemDetail';
import { OrdenCompra } from './components/checkout'; 
import Cart from './components/Cart'; 

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoriaProducto" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ContainerItemDetail />} />
          <Route path="/cart" element={<Cart />} /> {/* ✅ nueva ruta */}
          <Route path="/checkout" element={<OrdenCompra />} /> {/* ✅ nueva ruta */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
