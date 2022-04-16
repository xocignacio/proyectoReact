
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import    './navBar.css'


import { FaShoppingCart, FaBeer} from "react-icons/fa"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <>
  <Navbar className="superNav" collapseOnSelect expand="lg" >
  <Container>
  <NavLink to="home" className={"home"}>BeerScript</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to='conocenos' className={"conocer"}>Conocenos</NavLink>
      <NavLink to="/" className={"lista"}> Comprar <FaBeer />  </NavLink>
      <NavLink to="/" className={"cont"} >Contacto</NavLink>
    </Nav>
    <Nav>
   
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
