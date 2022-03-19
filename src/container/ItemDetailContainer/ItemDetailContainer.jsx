import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../component/ItemDetail/ItemDetail"
import { getFetch} from "../../helpers/getFetch"



function ItemDetailContianer() {
    const [producto, setProducto] = useState({})
    const [ loading, setLoading ] = useState(true)  
    const { detalleId } = useParams() 
    
    useEffect(()=>{
        getFetch
        .then(prod => prod.find(item => item.id === detalleId))
        .then(prod => setProducto(prod))
        
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))   
    }, [])
    
    return (
        <>
        {  loading ? <div class="glitch" data-text="Cargando...">Cargando...</div>  //// el loading esta en true y me muestra cargando, termina y dispara el useEffect, (linea 14) me trae los productos y se ejecuta el loading en falso  (linea 16) y cambia el estado.
      
        : 
        <div>
            <ItemDetail producto={producto} />      
        </div>
        }
        </>
    )
}

export default ItemDetailContianer
