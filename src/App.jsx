import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemList from './componentes/ItemList';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
import Contacto from './componentes/Contacto';
import { CartContext, CartProvider } from './context/CartContext';
import { useState } from 'react';
import Carrito from './componentes/Carrito';
import Checkout from './componentes/Checkout';

function App() {


  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer />}  />
          <Route path='productos/item/:id' element={<ItemDetailContainer />}  />
          <Route path='item/:id' element={<ItemDetailContainer />}  />
          <Route path='/nosotros' element={<Nosotros />}  />
          <Route path='/productos' element={<ItemListContainer />}  />
          <Route path='/productos/:category' element={<ItemListContainer />}  />
          <Route path='/contacto' element={<Contacto />}  />
          <Route path='/carrito' element={<Carrito   />}  />
          <Route path='/checkout' element={<Checkout   />}  />
          </Routes>
          
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
