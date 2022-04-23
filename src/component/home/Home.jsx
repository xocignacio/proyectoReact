import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import    './home.css'

function Home() {
  return (
    <>  
    <Carousel variant="dark">
  <Carousel.Item className='carrusel'>
    <img
      className="carrusel d-block w-100"
      src='https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/beer-bottle-g652e2c21d_1280.jpg?alt=media&token=2b381931-4731-41c1-a541-6147696e06d7'
      alt="First slide"
    />
    <Carousel.Caption>
      <h5 className='texto-carrusel'> Cerveza artesanal de verdad</h5>
      <p className='texto-carrusel'>Elaborada y pensadas para que vivir una experiencia </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carrusel d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/bottles-g53d11fc71_1920.jpg?alt=media&token=83126622-01c6-4284-9ca5-c40c482a4796"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5 className='texto-carrusel'>Amplia variedad de productos </h5>
      <p className='texto-carrusel'>Actualmente contamos con 8 diferentes tipos de cervezas</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carrusel d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/beer-g3ae25c2f3_1920.jpg?alt=media&token=bae24f67-6ea1-4f77-8a3e-db08e96dfcd9"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 className='texto-carrusel'>Se parte de BeerScript </h5>
      <p className='texto-carrusel'><Link to='/'>
                 Comprar mi primer BS
               </Link> </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    
<Container className='homeBienvenida' fluid>
  <Row>
    
    <Col>   <p className='historiaCerveza'>   Actualmente la cerveza artesana está cogiendo mucho impulso. Tras unas décadas en las que las cervezas industriales del tipo lager dominaban, en los últimos diez años han aparecido gran cantidad de pequeñas cervecerías artesanales que han permitido a los cerveceros probar nuevos estilos ya olvidados y refinar su paladar de forma que ha aumentado y mejorado el gusto y la exigencia de los clientes. Hoy en día las grandes cerveceras han visto que estaban perdiendo cuota de mercado y cada vez están sacando más estilos de cerveza al mercado. Actualmente destacan las IPA (Indian Pale Ale) o las lambic con sabores afrutados.
           Con este bum de las cervezas artesanales se ha extendido rápidamente el mundo la elaboración de la cerveza casera. Se pueden encontrar gran variedad de kits e ingredientes en el mercado y actualmente hay gran cantidad de posibilidades para la elaboración, pudiendo reproducir en casa casi cualquier estilo. Algunos de los más intrépidos siguen escribiendo la historia de la cerveza experimentando con nuevos ingredientes y elaborando estilos nunca antes visos.
           Si quieres conseguir los mejores ingredientes para elaborar tu propia cerveza casera visita nuestra tienda especializada también encontrarás todo el equipo necesario.
     </p> </Col>
    
  </Row>
</Container>
  

    </>
  )
}

export default Home

