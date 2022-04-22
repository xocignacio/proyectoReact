import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import Item from '../item/Item'
import    './cart.css'
import { IoIosPin } from "react-icons/io";


function Cart() {

 const {cartList, vaciarCart, precioTotal,  borrarItem } = useContext (CartContext) //// cartList array de los productos seleccionados
      
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
          .then (({id}) => alert ( 'su identificacion de compra es' + ' ' + id))
        
      }
      
   
    return (
     
    <Container fluid className='containerPapi'> 
     { cartList.map (prod =>  <p key={prod.id}>
      <Row className='rowRow'>    
        <Col className='col1'>   <Card.Img className='imagenCart' variant="top" src= {prod.foto}  /> </Col>
        <Col className='col2'>    <div className="titleTitle">  {prod.name} | {prod.price} | Cantidad: {prod.cantidad} </div>   </Col>
       
                      
        {/* <h2> {precioTotal} </h2> */}
            
     
              <Col>   
              <div className='counter'>        
              
              <button onClick={ generarOrden}> generando orden </button>
              <button onClick={borrarItem} >  eliminar </button>   
               <h2 className='title'>  {precioTotal()}  </h2>                
              </div>        
              </Col>            
      </Row>
      
      
      </p> )}
      <Row >
      <Col></Col>
      <Col className='colBotones'> <Link to='/'>  <button> Seguir comprando</button>  </Link>   
      
       <button onClick={vaciarCart} > Vaciar el carrito </button>  
      </Col> 
      <Col></Col>
      </Row>
     </Container>
   
    )
  }
  
export default Cart
  


/* 
{ cartList.map (prod => 
  <h2 key={prod.id}>
    
    <h2> Producto: {prod.name} {prod.price}  {prod.cantidad}   </h2>  
    <h2>  precio: {prod.price}  </h2>    
    <h2> cantidad: {prod.cantidad}   </h2>          
    <h2> {precioTotal} </h2>              
 </h2>  )}   */