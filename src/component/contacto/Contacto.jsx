import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  './contacto.css'

function Contacto() {
  return (
    <Container className='contacto' fluid>
    <Row  className='col-conocenos'>
      <Col>
         <h2 className='texto-conocenos'> Comunicate con nosotros </h2>
         <h2 className='texto-conocenos'> 11 66419166  </h2>
         <h2 className='texto-conocenos'> xose_ignacio@hotmail.com </h2>
           <h2 className='texto-trabajo'>
             En estos momentos estamos trabajando para que puedas encontrar nuestros productos en tu barrio
           </h2>
      </Col>
      <Col></Col>
    </Row>
  </Container>
  )
}

export default Contacto