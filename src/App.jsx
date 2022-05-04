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
import CartContextProvider from './component/CartContext';
import Footer from './component/footer/Footer';
import Contacto from './component/contacto/Contacto';
import CartFinalizacion from './component/Cart/CartFinalizacion';


function App() {
  return (  
   
    <BrowserRouter> 
    <CartContextProvider>
     <>
    <NavBar />    
    <Routes> 
    <Route path= "/" element={<Home />} />
    <Route path='/categoria/:id' element={<ItemListContiner />} />
    <Route path='/detalle/:detalleId' element={< ItemDetailContianer />} />
    <Route path='/categoria/:detalleId' element={< ItemDetailContianer />} />

    <Route path='/cart' element={ <Cart />}/>
    <Route path='/conocenos' element={ <Conocenos />}/>
    <Route path="/*" element={<Navigate to= "/" />} />
    <Route path='/Home' element={ <Home />}/>      
    <Route path='/contacto' element={ <Contacto />}/>       
    <Route path='/finalizacion' element={ <CartFinalizacion />}/> 
    </Routes>
    <Footer/> 
    </>
   
    </CartContextProvider>
    </BrowserRouter>
     
    
  );
}

export default App; 
  
