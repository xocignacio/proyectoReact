import { useState, useEffect } from "react"
import ItemList from "../component/itemList/ItemList";
import { productos } from "../helpers/getFetch";
import { useParams } from "react-router-dom";
import    './itemListContainer.css'
import ItemCount from "../component/itemCount/ItemCount";
/* import ItemCount from "../component/itemCount/ItemCount"; */
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import {collection, doc, getDocs, getFirestore} from 'firebase/firestore'   /////importo libreria de firestore

function ItemListContiner() {
    
    const [ loading, setLoading ] = useState(true)  
    const [prods, setProds ] = useState([])  
    const { id } = useParams()                        /// el producto lo guardo y lo hago persistente en un estado. se ejecuta una sola vez (buen rendimiento)
   
    
   useEffect (() => {
       const db =getFirestore () ////inicializa getFirestore con mis apis key

       const queryCollection = collection (db, 'Items')   ////// primer parametro db que es la base de datos que me traigo y segundo paremetro el nombre que le di al array en la pagina firebase coleecion
       getDocs(queryCollection)
       .then(resp => setProds( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))   

       
   }, [id])
    
  
/* 
    useEffect(()=> {
        const getFetch = new Promise((resolve, reject)=>{
    
            let condition = true
            if (condition) {
                setTimeout(() => {
                    resolve(productos)                    
                }, 2000);
            } else {
                reject('400 - not found')        
            }
        })
        if (id) {
            getFetch     
            .then(resp => setProds(resp.filter(prod=> prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))           
        } else {
            getFetch      
            .then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }
    }, [id]) */

     

    console.log(prods)
    return (
        <>      
        {  loading ? <div class="glitch" data-text="Cargando...">Cargando...</div>  //// el loading esta en true y me muestra cargando, termina y dispara el useEffect, (linea 14) me trae los productos y se ejecuta el loading en falso  (linea 16) y cambia el estado.

         :  
          <> 
        {/*  <div className="baner"> <h2>  </h2> </div> */}
           <div className="fondito ">   
              <h2> Conoce nuestros productos </h2>
              <h3 className="textoCerveza" > <IoCheckmarkCircleOutline /> Cerveza artesanal de calidad</h3>
              <ItemList prods={prods} />                                            {/* ItemList tengo el mapeo y en item tengo la card  */}
           
            </div>
            </>
        }    

        </>
    )
}

export default ItemListContiner
/* 

useEffect(()=> {
    getFetch                              // => importo el getFetch con el array de objetos, la promise con retardo de 3 segundos. Sirve para simular un llamado a api
    .then(resp => setProds(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))              
}, [])
 */