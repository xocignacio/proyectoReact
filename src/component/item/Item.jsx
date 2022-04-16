import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom" 
import    './item.css'

function Item({prod}) {
    return (
      <Link to={`detalle/${prod.id}`}> 
   
<div  key={prod.id}  > 
<Card  style={{ width: '18rem' }}>
<Card.Img  className="image" variant="top" src= {prod.foto}  />
<Card.Body>
 <Card.Title className="title"> {`${prod.name} - ${prod.categoria}`} </Card.Title>
 <Card.Title className="price">  {prod.price} </Card.Title>
 <Card.Text className="text">
 {prod.descripcion} 
   
 </Card.Text>
 <Button variant="primary"> Ir a detalles </Button>
</Card.Body>
</Card>
</div>


</Link> 
    )
}

export default Item

/* 

<Link to={`detalle/${prod.id}`}>
           
<div
     key={prod.id} className='row container d-flex justify-content-center align-items-center h-100' >                        
        <div className="card w-100 mt-5" >
          <div className="card-header">
            {`${prod.name} - ${prod.categoria}`}
          </div>
       
        <div className="card-body">
           
            <img src= {prod.foto}  alt='' className='w-50' />
                                                                      
        </div>
       
        <div className="card-footer">  
          <p  className='price' > {prod.price} </p>
            
                { <button className="btn btn-outline-primary btn-block">
                    detalle del producto
                </button>                 }
            
                                                                        
        </div>
    </div>
</div>



</Link> */




/* 

<Link to={`detalle/${prod.id}`}> 
   
<div  key={prod.id}  > 
<Card style={{ width: '18rem' }}>
<Card.Img  className="image" variant="top" src= {prod.foto}  />
<Card.Body>
 <Card.Title> {`${prod.name} - ${prod.categoria}`} </Card.Title>
 <Card.Title>  {prod.price} </Card.Title>
 <Card.Text>
   Some quick example text to build on the card title and make up the bulk of
   the card's content.
 </Card.Text>
 <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
</div>


</Link> */