import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContainerItemDetail from './components/ContainerItemDetail/ContainerItemDetail';

function GeneralComponents() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ContainerItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default GeneralComponents;
