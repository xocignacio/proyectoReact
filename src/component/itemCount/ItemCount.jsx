import {useState} from 'react'
import { Card } from 'react-bootstrap'
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
    alert ('Se agrego con exito ' + count + ' ipa ' + 'a su carrito' )
    
}

    return (
      <div className='card'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../multimedia/descarga.jpg"/>
      <Card.Body>
      <Card.Title>IPA</Card.Title>
      <Card.Text>
      Una IPA es una cerveza de alta graduación alcohólica (entre 5º y 7º), amargor y aroma intensos y cierta complejidad en el paladar. 
      El nombre hace referencia a India Pale Ale, un estilo cervecero que se caracteriza por la alta concentración de lúpulo
      </Card.Text>
     <button className='btn' onClick={resta}> - </button>
     <label className='label'> {count} </label>
     <button className='btn' onClick={suma}> + </button>
     <button className='btn' onClick={agregar}> Agregar</button>
    </Card.Body>
    </Card>
      </div>
      
  )
}

export default ItemCount
 



