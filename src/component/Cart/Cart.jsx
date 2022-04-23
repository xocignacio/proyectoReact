import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import    './cart.css'

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
        <Col className='col1'>  
         <Card.Img className='imagenCart' variant="top" src= {prod.foto}  /> 
        </Col>
        <Col className='col2'>    
          <div className="titleTitle">  {prod.name} | {prod.price} | Cantidad: {prod.cantidad} </div> 
          <button className='boton-borrar' onClick={borrarItem} >  x </button>  
        </Col>
        <Col>   
           <div className='counter'>                     
             <button className='boton-orden' onClick={ generarOrden}> Generar orden de compra </button>            
           </div>        
        </Col>            
      </Row>     
     </p> )}
       <Row >
        <Col></Col>
        <Col className='colBotones'> 
          <Link to='/'>  <button> Seguir comprando</button>  </Link>         
          <div className='separador'></div>
          <button onClick={vaciarCart} > Vaciar el carrito </button>  
        </Col> 
        <Col></Col>
      </Row>
     </Container>
   
    )
  }
  
export default Cart
  

