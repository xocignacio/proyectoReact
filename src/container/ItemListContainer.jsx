import { useState, useEffect } from "react"
import ItemList from "../component/itemList/ItemList";
import { getFetch } from "../helpers/getFetch";
import    './itemListContainer.css'
/* import ItemCount from "../component/itemCount/ItemCount"; */

function ItemListContiner() {
    
    const [ loading, setLoading ] = useState(true)  
    const [prods, setProds ] = useState([])         /// el producto lo guardo y lo hago persistente en un estado. se ejecuta una sola vez (buen rendimiento)
   
    useEffect(()=> {
            getFetch                              // => importo el getFetch con el array de objetos, la promise con retardo de 3 segundos. Sirve para simular un llamado a api
            .then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))              
    }, [])
     

    console.log(prods)
    return (
        <>      
        {  loading ? <div class="glitch" data-text="Cargando...">Cargando...</div>  //// el loading esta en true y me muestra cargando, termina y dispara el useEffect, (linea 14) me trae los productos y se ejecuta el loading en falso  (linea 16) y cambia el estado.

         :   <div className="fondito">   
              <h2> Nuestros productos </h2>
              <ItemList prods={prods} />                                            {/* ItemList tengo el mapeo y en item tengo la card  */}
            </div>
            
        }              
        </>
    )
}

export default ItemListContiner
