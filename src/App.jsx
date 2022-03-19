 import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navBar/navBar';
import Main from './component/Main/main';

import ItemCount from './component/itemCount/ItemCount';
import {BrowserRouter, Route , Routes , Navigate} from 'react-router-dom'
import ItemListContiner from './container/ItemListContainer';
import Cart from './component/Cart/Cart';
import ItemDetailContianer from './container/ItemDetailContainer/ItemDetailContainer';
import Conocenos from './component/conocenos/conocenos';
import Home from './component/home/Home';
import { getFetch } from './helpers/getFetch';



function App() {
  return (  
   
    <BrowserRouter> 
     <>
    <NavBar />
    
    <Routes> 
    <Route path='/' element={<ItemListContiner />} />
    <Route path='/detalle/:detalleId' element={< ItemDetailContianer />} />
    <Route path='/cart' element={ <Cart />}/>
    <Route path='/conocenos' element={ <Conocenos />}/>
    <Route path="/*" element={<Navigate to= "/" />} />
    <Route path='/Home' element={ <Home />}/>    
   
    </Routes>
    
    </>
    </BrowserRouter>
  
    
  );
}

export default App; 
  
/* import logo from './logo.svg'; */
/* 
<Main Bienvenida='Bienvenidos a BeerScript'/>
<ItemCount stock= {5} initial= {1} /> */