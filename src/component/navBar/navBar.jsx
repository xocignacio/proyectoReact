
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import carrito from "../carrito/carrito"

import { FaShoppingCart} from "react-icons/fa"

function NavBar() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">BeerScript</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Conocenos</Nav.Link>
      <Nav.Link href="#pricing">Productos</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    <Nav>
   {/*    <Nav.Link href="#deets">More deets</Nav.Link> */}
      <Nav.Link eventKey={2} href="./carrito/carrito.jsx">
        carrito <FaShoppingCart />
     </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default NavBar
