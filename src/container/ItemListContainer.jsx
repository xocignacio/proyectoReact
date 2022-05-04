import { useState, useEffect } from "react"
import ItemList from "../component/itemList/ItemList";
import { useParams } from "react-router-dom";
import    './itemListContainer.css'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'   /////importo libreria de firestore

function ItemListContiner() {
    
    const [ loading, setLoading ] = useState(true)  
    const [prods, setProds ] = useState([])  
    const { id } = useParams()                       /// el producto lo guardo y lo hago persistente en un estado. se ejecuta una sola vez (buen rendimiento)
       
   useEffect (() => {
       const db =getFirestore () ////inicializa getFirestore con mis apis key

       const queryCollectionFinal =  !id 
       ? 
           collection(db, 'items' )
       :  
           query( collection(db, 'Items' ), 
               where('categoria','==', id) 
                                               
           )                             

        getDocs(queryCollectionFinal)
        .then(resp => setProds( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))   

        }, [id])   

    
    return (
        <>      
        {  loading ? <div class="glitch" data-text="Cargando...">Cargando...</div>  //// el loading esta en true y me muestra cargando, termina y dispara el useEffect, (linea 14) me trae los productos y se ejecuta el loading en falso  (linea 16) y cambia el estado.

         :  
          <>        
           <div className="fondito ">   
              <h2> Conoce nuestros productos </h2>
              <h3 className="textoCerveza" > <IoCheckmarkCircleOutline /> Tu cerveza local al alcance de un click</h3>
              
              <ItemList prods={prods} />                                           {/* ItemList tengo el mapeo y en item tengo la card  */}
           </div>
            </>
        }    

        </>
    )
}

export default ItemListContiner
