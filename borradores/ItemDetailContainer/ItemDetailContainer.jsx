import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

import { getFetch } from "../../src/helpers/getFetch"

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
