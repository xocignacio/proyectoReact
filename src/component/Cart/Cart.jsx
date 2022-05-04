import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import    './cart.css'
import { FaBeer} from "react-icons/fa"

function Cart() {
 const [dataForm, setDataForm] = useState({email: '', name: '', phone: ''})
 const {cartList, vaciarCart, precioTotal,  borrarItem } = useContext (CartContext) //// cartList array de los productos seleccionados
  
 
        
     /*  const generarOrden = (e) => {
        e.preventDefault();
        let orden = {}
      
        orden.buyer = dataForm
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
          .then (({id}) => alert ( 'Muchas gracias por confiar en nosotros, Su identificacion de compra es' + ' ' + id))
        
      }

      const handleChange = (e) => {
        setDataForm( {
          ...dataForm,
          [e.target.name]: e.target.value
      } )
    }       */
       

    return (
    <>        
      
    <Container fluid className='containerPapi'> 
     { cartList.map (prod =>  <p key={prod.id}>
      <Row className='rowRow'>    
        <Col className='col1'>  
         <Card.Img className='imagenCart' variant="top" src= {prod.foto}  /> 
        </Col>
        <Col className='col2'>    
          <div className="titleTitle"> <FaBeer />  {prod.name} | ${prod.price} | Cantidad: {prod.cantidad} </div> 
         
        </Col>
        <Col className='col2'>   
        <button className='boton-borrar' onClick={()=>{borrarItem(prod.id)}} >  x </button>  
        </Col>            
      </Row>     
     </p> )}     
       
      
       <Row >
        <Col></Col>
        <Col className='colBotones'> 
          <Link to='/categoria/Artesanal'>  <button  className='boton-extra' > Seguir comprando</button>  </Link>         
          <div className='separador'></div>
          <button  className='boton-extra'  onClick={vaciarCart} > Vaciar el carrito </button>  
        </Col> 
        <Col>   <Link to='/finalizacion'>  <button className='boton-orden'> Total: ${precioTotal()} | Comprar ahora </button>  </Link>        </Col>
      </Row>
     </Container> 
     
     </>
    )
  }
  
export default Cart
  

