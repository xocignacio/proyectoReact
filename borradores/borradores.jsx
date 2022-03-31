import { lazy, Suspense } from 'react' 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContianer from './container/ItemDetailContainer/ItemDetailContainer'
import Cart from './component/Cart/Cart'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/navBar/navBar'

/*  import ItemListContainer from './container/ItemListContainer' */

 const ItemListContainer = lazy(()=> import('./container/ItemListContainer')) 

function App() { 
 
    // Input({ placeholder: 'ingrese el nombre' })
    return (
          <Suspense fallback={<h2> Loading ...</h2>} >  */
            <BrowserRouter>
                <div className="App" >
                    <NavBar />     
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <ItemListContainer 
                                    saludo= ' soy ItemListContiner' 
                                />
                            } 
                        />
                        <Route 
                            path="/categoria/:id" 
                            element={
                                <ItemListContainer 
                                    saludo= ' soy ItemListContiner' 
                                />
                            } 
                        />
                       {  <Route path='/detalle/:detalleId' element={<ItemDetailContianer />}/> }
                        <Route path='/cart' element={<Cart />}/>
                      {/*   { <Route path='/notFound' element={<Componente404 />}/> } */}
                        
                        <Route path='/*' element={<Navigate to='/' />} />
                        
                    </Routes>
                </div>
            </BrowserRouter>
        /*  </Suspense>  

    )
}

export default App;







ITEM LIST CONTAINER 

mport { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../componentes/ItemCount/ItemCount";
import ItemList from "../componentes/ItemList/ItemList";
import { getFetch } from "../helpers/gFetch";
import Item from "../component/item/Item";

function ItemListContiner({ saludo }) {
    const [bool, setBool] = useState(true)
    const [ loading, setLoading ] = useState(true)
    const [prods, setProds ] = useState([])
    //console.log(task)
    const { id } = useParams()
     

    useEffect(()=> {
        if (id) {
            getFetch// simulacion a un llamado a una api        
            .then(resp => setProds(resp.filter(prod=> prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))           
        } else {
            getFetch// simulacion a un llamado a una api        
            .then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }
    }, [id])

    const onAdd = (cant) => {
        console.log(cant)
    }


    console.log(id)
    return (
            <>
                <div>{saludo}</div> 
                {       loading ? <h2>Cargando...</h2> 
                    :
                        <ItemList prods={prods} />
                }
                <ItemCount initial={1} stock={10} onAdd= { onAdd  } />
            </>
    )
}

export default ItemListContiner










///////////////////











































































import { useState, useEffect } from "react"
import ItemList from "../component/itemList/ItemList";
import { getFetch } from "../helpers/getFetch";
import    './itemListContainer.css'
/* import ItemCount from "../component/itemCount/ItemCount"; */

function ItemListContiner() {
    
    const [ loading, setLoading ] = useState(true)  
    const [prods, setProds ] = useState([])         /// el producto lo guardo y lo hago persistente en un estado. se ejecuta una sola vez (buen rendimiento)
   
    useEffect(()=> {
            getFetch                              // => importo el getFetch con el array de objetos, la promise con retardo de 3 segundos. Sirve para simular un llamado a api
            .then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))              
    }, [])
     

    console.log(prods)
    return (
        <>      
        {  loading ? <div class="glitch" data-text="Cargando...">Cargando...</div>  //// el loading esta en true y me muestra cargando, termina y dispara el useEffect, (linea 14) me trae los productos y se ejecuta el loading en falso  (linea 16) y cambia el estado.

         :   <div>   
              <h2> Lista de cervezas </h2>
              <ItemList prods={prods} />                  {/* ItemList tengo el mapeo y en item tengo la card  */}
            </div>
            
        }              
        </>
    )
}

export default ItemListContiner




/////////////////



<div
key={prod.id} className='cartita' >                        
   <div className="card w-100 mt-5" >
     <div className="card-header">
       {`${prod.name} - ${prod.categoria}`}
     </div>
   <div className="card-body">
       <img src={prod.foto} alt='' className='w-50' />
                                                                 
   </div>
  
   <div className="card-footer">  
     <p  className='price' > {prod.price} </p>
     <p></p>
     {/*   
           { <button className="btn btn-outline-primary btn-block">
               detalle del producto
           </button>                 }
        */}
                                                                   
   </div>
</div>
</div>






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