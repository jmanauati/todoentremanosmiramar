import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

function ItemDetails({item}) {

  const { agregarAlCarrito } = useContext(CartContext);


  const [cantidad,setCantidad] = useState(1)

  const handleRestar = ()=>{
    if(cantidad >=1){
    setCantidad(cantidad - 1);
  }
}
  const handleSumar = ()=>{
  cantidad < item.stock && setCantidad(cantidad +1);
}


  return (
    <div className='container'>
        <div className='producto-detalle'>
            <img src={item.iamge} alt={item.title} className='img-detalle' />
            <div className='data-detalle'>
                <h3 className="titulo-detalle">{item.title}</h3>
                <p className="descripcion-detalle">{item.description}</p>
                <p className="precio-detalle">${item.price}</p>
                <ItemCount 
                cantidad={cantidad} 
                handleRestar={handleRestar} 
                handleSumar={handleSumar} 
                handleAgregar={()=>{agregarAlCarrito(item,cantidad)}} />
            </div>
        </div>
      
    </div>
  )
}
export default ItemDetails
