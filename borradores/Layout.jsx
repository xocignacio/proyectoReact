import bootstrap from "bootstrap"

function Layout() {
  return (
    
<div className="Container">
 <div className="row">
     <div className="col-md-4">
         
     <div
                 key={prod.id}
                 className='col-md-4 container d-flex justify-content-center'
            >                        
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.name} - ${prod.categoria}`}
                    </div>
                    <div className="card-body">
                        <img src={prod.foto} alt='' className='w-50' />
                        {prod.price}                                                            
                    </div>
                    <div className="card-footer">  
                      {/*   
                            { <button className="btn btn-outline-primary btn-block">
                                detalle del producto
                            </button>                 }
                         */}
                                                                                    
                    </div>
                </div>
            </div>
    
     </div>
 </div>
</div>
  
  
  
  )
}

export default Layout