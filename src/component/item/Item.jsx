import { Link } from "react-router-dom" 
import    './item.css'

function Item({prod}) {
    return (
        <Link to={`detalle/${prod.id}`}>
           
            <div
                 key={prod.id} className='col-md-3  container d-flex justify-content-center align-items-center h-100' >                        
                    <div className="card w-100 mt-5" >
                      <div className="card-header">
                        {`${prod.name} - ${prod.categoria}`}
                      </div>
                    <div className="card-body">
                        <img src={prod.foto} alt='' className='w-50' />
                                                                                  
                    </div>
                   
                    <div className="card-footer">  
                      <p  className='price' > {prod.price} </p>
                      {/*   
                            { <button className="btn btn-outline-primary btn-block">
                                detalle del producto
                            </button>                 }
                         */}
                                                                                    
                    </div>
                </div>
            </div>


            
            </Link>
    )
}

export default Item
