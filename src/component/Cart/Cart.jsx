import { useContext } from 'react'
import { CartContext } from '../CartContext'
import    './cart.css'

function Cart() {

 const {cartList, vaciarCart } = useContext (CartContext)




    return (
      <div className="cart">
        { cartList.map (prod => 
        <li key={prod.id}>
          <h2> nombre: {prod.name}    </h2>  
          <h2>   precio: {prod.price}  </h2>    
          <h2> cantidad: {prod.cantidad}   </h2>            
       </li>  ) }
     
      <button className='btn' onClick={vaciarCart} > Vaciar el carrito </button>
      </div>
    )
  }
  
export default Cart
  