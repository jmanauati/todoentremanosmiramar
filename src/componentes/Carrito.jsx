import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Carrito() {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = ()=>{
        vaciarCarrito()
    }

    return (
    <div>
                <h2>Carrito</h2>

{
                carrito.map((prod) => {return(
                <div key={prod.id}>
                <h3>{prod.title}</h3>
                <p>Precio Unitario: ${prod.price}</p>
                <p>Precio Total: ${prod.price * prod.cantidad}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <br />
                </div>
                )})
}

<h3>Precio Total: ${precioTotal()}</h3>
<button onClick={handleVaciar}>VACIAR</button>
<Link to="/checkout">Finalizar Compra</Link>

    </div>
)
}

export default Carrito
