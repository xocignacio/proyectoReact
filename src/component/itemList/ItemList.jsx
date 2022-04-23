import Item from "../item/Item"
import './itemList.css'

function ItemList({ prods }) {
    return (
      <>                 
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {prods.map((prod) => <Item prod={prod} /> )}
        </div>
      </> 
    )
} 

export default ItemList

