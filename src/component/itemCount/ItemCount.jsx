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
     <div> <button className='btn' onClick={resta}> - </button>
     <label className='label'> {count} </label>
     <button className='btn' onClick={suma}> + </button>
     <button className='btn' onClick={agregar}> Agregar</button> </div>
    
   
  )
}

export default ItemCount
 