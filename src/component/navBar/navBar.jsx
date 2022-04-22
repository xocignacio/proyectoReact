
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import    './navBar.css'


import { FaShoppingCart, FaBeer} from "react-icons/fa"
import { NavLink } from "react-router-dom"
import Widget from "../Cart/Widget"
import ReactLogo from "./ReactLogo"


function NavBar() {
  return (
    <>
  <Navbar className="superNav" collapseOnSelect expand="lg" >
  <Container fluid>
    
  <NavLink to="home" className={"home"}> <ReactLogo /> </NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to='conocenos' className={"conocer"}>CONOCENOS</NavLink>
      <NavLink to="/" className={"lista"}><FaBeer  className="birrita" /> PRODUCTOS <FaBeer className="birrita" />  </NavLink>
      <NavLink to='contacto' className={"cont"} >CONTACTO</NavLink>
    </Nav>
    <Nav>
   
      <NavLink to="cart" className={"carrito"}>  <Widget />   </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default NavBar
