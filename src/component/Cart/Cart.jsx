import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import Item from '../item/Item'
import    './cart.css'


function Cart() {

 const {cartList, vaciarCart, precioTotal, borrarItem } = useContext (CartContext) //// cartList array de los productos seleccionados
 
      const generarOrden = (e) => {
        e.preventDefault();
        let orden = {}

        orden.buyer = {name: 'ignacio' , email: 'xose_ignacio@hotmail.com' , phone: '1234566789'}
        orden.total = precioTotal ()

        orden.Item = cartList.map (cartItem => {
            const id = cartItem.id 
            const nombre = cartItem.name 
            const precio = cartItem.price * cartItem.cantidad

            return { id, nombre, precio}
        })
         
          const db = getFirestore()                                  //////creo ordenes en la base de firebase
          const queryCollection = collection (db, 'ordenes')
          addDoc ( queryCollection, orden)
          .then (({id}) => alert (id))
        
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
  