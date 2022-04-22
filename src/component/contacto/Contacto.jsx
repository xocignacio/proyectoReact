import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  './contacto.css'

function Contacto() {
  return (
    <Container className='contacto' fluid>
    <Row>
      <Col>1 of 1</Col>
      <Col>2 </Col>
      <Col className='correo'>3</Col>
    </Row>
  </Container>
  )
}

export default Contacto