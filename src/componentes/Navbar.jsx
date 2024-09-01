import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo'><h1>Carpishop</h1></Link>
      <ul className='menu'>
        <li><Link to="/" className='menu-Link'>Inicio</Link></li>
        <li><Link to="/nosotros" className='menu-Link'>Nosotros</Link></li>
        <li><Link to="/productos" className='menu-Link'>Productos</Link></li>
        <li><Link to="/productos/premium" className='menu-Link'>Premium</Link></li>
        <li><Link to="/contacto" className='menu-Link'>Contacto</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  )
}

export default Navbar
