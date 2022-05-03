import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { Card, CloseButton, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import    './cart.css'
import    './form.css'
import { IoIosPin } from "react-icons/io";
import { FaBeer} from "react-icons/fa"

function CartFinalizacion() {
 const [dataForm, setDataForm] = useState({email: '', name: '', phone: ''})
 const {cartList, vaciarCart, precioTotal,  borrarItem } = useContext (CartContext) //// cartList array de los productos seleccionados
      
      const generarOrden = (e) => {
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
          .then (({id}) => alert ( 'Muchas gracias por confiar en nosotros, su identificacion de compra es:' + ' ' + id))        
      }

      const handleChange = (e) => {
        setDataForm( {
          ...dataForm,
          [e.target.name]: e.target.value
      } )
    }
          
         
    return (
     
     <Container className='fondoFinalizacion' fluid>
       
     <Row>
         <Col>
         <h2>Ya casi tenes tu cerveza artesanal, completa el formulario para finalizar y genera una orden de compra</h2> </Col>
     </Row>

       <Row>
       <Col></Col>

     <Col>      
          
     <form 
                className='mt-5'
                onSubmit={generarOrden}                 
            >
                <input id='input-name'
                    type='text' 
                    name='name' 
                    placeholder='Nombre y Apellido' 
                    value={dataForm.name}
                    onChange={handleChange}
                /> 
                
                <input id='input-phone'
                    type='text' 
                    name='phone'
                    placeholder='Celular' 
                    value={dataForm.phone}
                    onChange={handleChange}
                />
                <input id='input-email'
                    type='email' 
                    name='email'
                    placeholder='Email' 
                    value={dataForm.email}
                    onChange={handleChange}
                />
                
                {/* <input 
                    type='email' 
                    name='email1'
                    placeholder='repita email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /> */}

               { cartList.map (prod =>  <p key={prod.id}> 
                <p className='carritoFinal'>  <li> {prod.cantidad}  {prod.name} <FaBeer />  <CloseButton className='btn-borrar' onClick={()=>{borrarItem(prod.id)}}/>   </li> </p>  </p> )}
                <p className='precioTotal'>Total: ${precioTotal()}</p>
                <Card.Text className="textVendedor">  Se retira en direccion del vendedor  </Card.Text>
                        <p> <IoIosPin />  Villa Adelina - San Isidro</p>
                        <Link to='/'>  <button  className='boton-extra' > Seguir comprando</button>  </Link>     
                <button className='boton-orden' onClick={ generarOrden}> Generar orden de compra </button>   
            </form>
     
     </Col>

       <Col> 
       
       </Col>
       </Row>
      
      
     </Container>
   
    )
  }
  
export default CartFinalizacion
  

