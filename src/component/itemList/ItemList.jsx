import { Col, Container, Row } from "react-bootstrap"
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


{/* <Container>
  <Row>
    <Col> {prods.map((prod) => <Item prod={prod} /> )}</Col>
    <Col>2 of 2</Col>
  </Row>
  </Container> */}