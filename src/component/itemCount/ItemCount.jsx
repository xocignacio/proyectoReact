import {useState} from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import './itemCount.css'

function ItemCount({stock, initial, onAdd}) {
  const [count,setCount] = useState (initial)

  const suma = () => {
    
      if (count < stock) {
        setCount (count + 1)
      }
  }     

  const resta = () => {
    
    if (count > initial) {
      setCount( count - 1 )
      }
  }

  const agregar = () => {
     onAdd (count)    
}

  return (
   <div className='count'> 
     <Container fluid>
        <Row>
          <Col>                                
            <div className='button-wrapper' >    
                <button className='btnCuentas' onClick={resta}> - </button>                   
                <h1 className='numero'> {count}    </h1> 
                <button className='btnCuentas' onClick={suma}> + </button>                    
            </div>
                <button className='btn' onClick={agregar}> Agregar</button> 
          </Col>               
        </Row>
    </Container>
  </div>  
  )
}

export default ItemCount
 

