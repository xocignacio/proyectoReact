import { Col, Container, Row } from 'react-bootstrap'
import  './conocenos.css'

function Conocenos() {
  return (
    <Container className='conocenos' fluid>
    <Row  className='col-conocenos'>
      <Col>
         <h2 className='texto-conocenos'> BeerScript es una marca registrada de cervezas artesanales que comenzo en junio del 2009. Eramos un grupo de tres amigos, que comenzo a cocinar la cerveza en un pequeño cuarto en Ingeniero Maschwitz, con la ilusion de que algun dia
           el sueño se volveria realidad. Jamas nos imaginamos que algunos años despues estariamos innaugurando nuestra propia marca, para distribuirla en los bares mas populares del barrio. </h2>
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

