import React, { useState } from 'react'

function ItemCount( {cantidad, handleRestar, handleSumar, handleAgregar} ) {





  return (
    <div>
      <div className="item-count">
        <button className="restar btn-pequeño" onClick={handleRestar}>-</button>
        <p className='cantidad-counter'>{cantidad}</p>
      <button className='sumar btn-pequeño'onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount
