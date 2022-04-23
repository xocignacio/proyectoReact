import React, { useContext } from 'react'
import { FaShoppingCart} from "react-icons/fa"
import { Badge, Button} from 'react-bootstrap'
import { CartContext } from '../CartContext'

function Widget( ) {
   const {cartList } = useContext (CartContext)
    
   const cantidadTotalItem = () => {
    return cartList.reduce((acum, prod) => acum += prod.cantidad , 0) 
}
    return (
      
        <Button className='boton-cart' > Carrito <FaShoppingCart className='changuito'/>
      
        <Badge className='badge'>   {/*  { cartList.map (prod => 
          
        <li key={prod.id}>  */} <h6 className='cantidadDelCarro'> + {cantidadTotalItem()}  {/* {prod.cantidadTotalItem} */}  </h6> {/*  </li>  ) } */}
        
         </Badge>
              
       
       </Button>
   
  )
}

export default Widget
