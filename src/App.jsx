import React from 'react'
import Navbar from './components/Navbar/Navbar'
import demon from "../public/Demon.svg"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function GeneralComponents() {
  return (
    <>
    <Navbar/>
    <ItemListContainer texto ={"hola"}/>
    </>
  )
}

export default GeneralComponents;
