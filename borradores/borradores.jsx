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