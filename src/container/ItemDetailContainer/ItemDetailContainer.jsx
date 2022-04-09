import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../component/ItemDetail/ItemDetail"
import { getFetch, productos} from "../../helpers/getFetch"



function ItemDetailContianer() {
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()
    
    useEffect(()=>{
        const db = getFirestore()
        const queryProd = doc(db, 'tems', idDetalle)
        getDocs(queryProd)
        .then(resp => setProducto( {id: resp.id, ...resp.data()} ))
    }, [])



  /* 
    const getFetch = new Promise((resolve, reject)=>{
    
        let condition = true
        if (condition) {
            setTimeout(() => {
                resolve(productos)                    
            }, 2000);
        } else {
            reject('400 - not found')        
        }
    }) */
    
    /* useEffect(()=>{
        getFetch
        .then(prod => prod.find(item => item.id === detalleId))
        .then(prod => setProducto(prod))
        
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))   
    }, []) */
    
   

    return (
        <>
        <div>
            <ItemDetail producto={producto} />      
        </div>
    
        </>
    )
}

export default ItemDetailContianer


/* {  loading ? <div class="glitch" data-text="Cargando...">Cargando...</div>  //// el loading esta en true y me muestra cargando, termina y dispara el useEffect, (linea 14) me trae los productos y se ejecuta el loading en falso  (linea 16) y cambia el estado.
      
: 
} */