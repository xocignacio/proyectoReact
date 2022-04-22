import { Col, Container, Row } from 'react-bootstrap'
import  './conocenos.css'

function Conocenos() {
  return (
    <Container className='conocenos' fluid>
    <Row  className='col-conocenos'>
      <Col>
         <h2 className='texto-conocenos'> BeerScript es una marca registrada de cervezas artesanales que comenzo un junio de 2009, con la idea de 2 amigos de creer una cerveza artesanal de verdad
           Ese fue la idea fundamental para comenzar a cocinar birra artesanal en un pequeño cuarto en ingeniero maschwitz con la ilucion que algun dia
           el sueño se vuelva realidad. </h2>
           <h2>
             Actualmente contamos con 8 diferentes variedades de cervezas artesanales, cada una elaborada con extremo cuidado para obtener un sabor unico
           </h2>
      </Col>
      <Col></Col>
    </Row>
  </Container>
  )
}

export default Conocenos

