import { Card } from "react-bootstrap"
import { Link } from "react-router-dom" 
import    './item.css'

function Item({prod}) {
    return (
      <Link to={`/detalle/${prod.id}`}> 
        
        <div  key={prod.id}  > 
        <Card className="cardCuerpo" style={{ width: '25rem' }} >
        <Card.Img  className="image" variant="top" src= {prod.foto}  />
        <Card.Body>
        <Card.Title className="titleList"> {prod.name} </Card.Title>
        <Card.Title className="titleList"> {prod.categoria} </Card.Title>
        <Card.Title className="price">  ${prod.price} </Card.Title>
        <Card.Text className="text">
        {prod.descripcion} 
        
        </Card.Text>
        <center>  <button className="btn-detalle btn-outline-warning" > Ir a detalles </button> </center>

        </Card.Body>
        </Card>
        </div>

      </Link> 
    )
}

export default Item
