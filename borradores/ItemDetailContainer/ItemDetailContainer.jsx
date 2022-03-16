import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../component/ItemDetail/ItemDetail"

import { getFetch } from "../../helpers/getFetch"

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})

    const { detalleId } = useParams()
    console.log(detalleId)
    
    return (
        <div>
            'ItemDetailContainer'
        </div>
    )
}

export default ItemDetailContainer
