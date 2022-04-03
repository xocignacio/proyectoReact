import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import Item from '../item/Item'
import    './cart.css'


function Cart() {

 const {cartList, vaciarCart, precioTotal, borrarItem } = useContext (CartContext) //// cartList array de los productos seleccionados
 
 function generarOrden (e) {
   e.preventDefault();
   let orden = {}

   
 }

    return (
      <div className="cart">
        { cartList.map (prod => 
        <li key={prod.id}>
          <h2> nombre: {prod.name}    </h2>  
          <h2>  precio: {prod.price}  </h2>    
          <h2> cantidad: {prod.cantidad}   </h2>          
          <h2> {precioTotal} </h2>
              
       </li>  ) }
     
       <li>
       <button className='btn' onClick={vaciarCart} > Vaciar el carrito </button>
      <button onClick={ generarOrden}> generando orden </button>
      <button onClick={ borrarItem}> eliminar </button>
     
      <Link to='/'>
                        <button className='btn btn-outline-primary'> Seguir comprando</button>

       </Link>
       </li>

      </div>
    )
  }
  
export default Cart
  