
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import    './navBar.css'


import { FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <NavLink to="home" className={"home"}>BeerScript</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to='conocenos' className={"conocer"}>Conocenos</NavLink>
      <NavLink to="/" className={"lista"}> Comprar cerveza </NavLink>
      <NavLink to="/" className={"cont"} >Contacto</NavLink>
    </Nav>
    <Nav>
   {/*    <Nav.Link href="#deets">More deets</Nav.Link> */}
      <NavLink to="cart" className={"carrito"}>  Carrito <FaShoppingCart />
     </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default NavBar
