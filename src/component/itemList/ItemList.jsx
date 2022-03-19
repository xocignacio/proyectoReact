import Item from "../item/Item"
import './itemList.css'


function ItemList({ prods }) {
    return (
        <div className="fondito">
            {prods.map((prod) => <Item prod={prod} /> )}
        </div>
    )
}

export default ItemList
