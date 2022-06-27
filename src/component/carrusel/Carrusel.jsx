import { Carousel, Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import './carrusel.css'


function Carrusel() {
  return (
    <Carousel fade>
    <Carousel.Item >
      <img
     
        className="imagenes-carrusel d-block w-100"
        src='https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/carru1.jpg?alt=media&token=b6488478-3aea-49d4-83c2-4307ec97f586'
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className='textoCarrusel '   >Cerveza artesanal de calidad </h3>
      {/*   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carrusel-item'>
      <img
       
        className="imagenes-carrusel d-block w-100" 
        src='https://cdn.gethypervisual.com/images/shopify/9faf50c2-b91f-42a9-9809-3f5e8eef2771/w1200_f148_BANNER-FOTO-FINAL.png'
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h2 className='texto-carrusel'>Trabajamos con andes origen</h2>
       {/*  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="imagenes-carrusel d-block w-100"
        src='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LCZYWLLCRFFYLLAEPWQZGXE45Y.jpg'
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3 className='texto-carrusel'>Envios a todo Buenos Aires</h3>
        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Carrusel