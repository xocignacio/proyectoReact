import {useState} from 'react'
import { Card } from 'react-bootstrap'
import './itemCount.css'

function ItemCount({stock, initial}) {
  const [count,setCount] = useState (1)

  const suma = () => {
      setCount (count +1)
  }     

  const resta = () => {
      setCount (count -1)
  }

  const onAdd = () => {
    if (count <= 5) {
      alert ("se agrego" + " " + count + " IPA a su carrito")
      
    } else {
      alert ('No hay stock')
    }
         
  }

    return (
      <div>
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
     <button className='btn' onClick={onAdd}> Agregar</button>
    </Card.Body>
    </Card>
      </div>
      
  )
}

export default ItemCount

