import { useContext, useState } from 'react'
import { Card, Col, Container, Figure, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../CartContext'
import ItemCount from '../itemCount/ItemCount'
import { IoIosPin } from "react-icons/io";
import    './itemDetail.css'       //////////////cart de detalles
             
function ItemDetail({producto}) {
const [isCant, setIsCant] = useState (false)  
const {addToCart} = useContext (CartContext) 
const {detalleId} = useParams()


const onAdd = (cantidad) => {
 console.log (cantidad)
 addToCart({ ...producto, cantidad: cantidad })
 setIsCant (true)
}  

  return (     
  
  <Container fluid className='papaContenedor'>   
     <Row className='Contenedor'>                    
         
                 <Col>
                 <div className='imagen'>
                 <Card.Img  variant="top" src= {producto.foto}  />
                 </div>
                 </Col>
                 
                 <Col className='textoCaja'> 
                 <Figure.Caption>
                        <Card.Title className="title"> {producto.name}  </Card.Title>
                        <Card.Title className="title"> {producto.categoria} </Card.Title>
                        <Card.Title className="title">  {producto.price} </Card.Title>
                        <Card.Text className="title"> {producto.descripcion}  </Card.Text>
                        <Card.Text className="textVendedor"> Se retira en direccion del vendedor  </Card.Text>
                        <Card.Text className="titleDireccion">  <IoIosPin /> {producto.ubicacion}  </Card.Text>
                 </Figure.Caption>
                 </Col>
             
               <Col className='counter'>                                                        
                  {isCant ?
                  <center>
                  <div> 
                    <Link to='/categoria/Artesanal'>
                      <button className='btn  btn-outline-warning'> Seguir comprando</button>
                    </Link>
                      <hr />
                    <Link to='/cart'>
                        <button className='btn btn-outline-success'> Ir al carrito </button>
                    </Link>
                </div> 
                </center>
                :
                  <center>  <ItemCount initial={1} stock={10} onAdd={onAdd} /> </center>          
                
                }                  
              </Col>
     </Row>
   </Container>
     
    )
  }
  
  export default ItemDetail
  
/* 
  <center>
  <div className='Foto'>   <img src={producto.foto} alt = 'imagen' /> </div> */
{/* 
  <div className='info'>  
   <p className='detallesName alert alert-primary w-25'>{producto.name}</p>
   <p className='detallesPrice alert alert-primary w-25'>{producto.price}</p>
   <p className='detallesCategori alert alert-primary w-25'>{producto.categoria}</p> */}
  {/*  <ItemCount stock= {5} initial= {1} onAdd={onAdd} />  */}  {/*  </div>
   

   
   </center> */}


  /*  <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src= {producto.foto} 
  />
  <Figure.Caption>
  <Card.Title className="title"> {`${producto.name} - ${producto.categoria}`} </Card.Title>
 <Card.Title className="price">  {producto.price} </Card.Title>
 <Card.Text className="text"> {producto.descripcion}  </Card.Text>
 <Card.Text className="textVendedor"> Se retira en direccion del vendedor  </Card.Text>
 <Card.Text className="textUbicacion">  <IoIosPin /> {producto.ubicacion}  </Card.Text>
  </Figure.Caption>
</Figure> */