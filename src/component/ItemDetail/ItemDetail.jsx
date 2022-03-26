import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import ItemCount from '../itemCount/ItemCount'
import    './itemDetail.css'       //////////////cart de detalles
             
function ItemDetail({producto}) {
const [isCant, setIsCant] = useState (false)  
const {addToCart} = useContext (CartContext) 

const onAdd = (cantidad) => {
 console.log (cantidad)
 addToCart({ ...producto, cantidad: cantidad })
 setIsCant (true)
}  

  return (
      <div className='detalles'>
        
         <center>
           <div className='Foto'>   <img src={producto.foto} alt = 'imagen' /> </div>
         
           <div className='info'>  
            <p className='detallesName alert alert-primary w-25'>{producto.name}</p>
            <p className='detallesPrice alert alert-primary w-25'>{producto.price}</p>
            <p className='detallesCategori alert alert-primary w-25'>{producto.categoria}</p>
           {/*  <ItemCount stock= {5} initial= {1} onAdd={onAdd} />  */}   </div>
            
            </center>
            {isCant ?
                <center>  
                    <Link to='/'>
                        <button className='btn btn-outline-primary'> Seguir comprando</button>

                    </Link>
                    <Link to='/cart'>
                        <button className='btn btn-outline-success'> Ir al carrito </button>
                    </Link>
                </center>
             :
               <center>  <ItemCount initial={1} stock={10} onAdd={onAdd} /> </center>   
           
            
            }

      </div>
    )
  }
  
  export default ItemDetail
  