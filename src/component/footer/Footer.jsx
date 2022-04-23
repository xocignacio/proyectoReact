import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'
import { FaLinkedin} from "react-icons/fa"
import { NavLink } from "react-router-dom"
import ReactLogo from '../navBar/ReactLogo'

function Footer() { 
   return (   

  <div className='footer' >  

    <Container fluid >
      <Row>       
        <Col> 
            <p className='info'>  Telefono: 11 66419166</p>   
            <p className='info' > email: xose_ignacio@hotmail.com  </p>
            <p className='info' > Buenos Aires Argentina </p>
         </Col>
        
        <Col> 
           <NavLink to="home" className={"home2"}> <ReactLogo /> </NavLink>
        </Col>
        <Col className='redes'>          
           <ul>
            <li> <p className='encontrame'> Conoceme <a href="https://www.linkedin.com/in/ignacio-traba-canzoniero-b3063a129/" className="linkedin" target="blanck"> <FaLinkedin /> </a>   </p> </li>
          </ul>         
        </Col>    
      </Row>
      </Container>
       <hr />
      <Container fluid>
      <Row>
        <Col></Col>     
        <Col className='derechos'> <p> &copy;{new Date().getFullYear()} IgnaTECH® | All right reserved | Terms of service | Privacy </p>  </Col>
        <Col></Col>   
      </Row>
    </Container>
  </div>
  )
}

export default Footer

