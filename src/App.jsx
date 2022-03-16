 import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navBar/navBar';
import Main from './component/Main/main';
import Carrito from './component/carrito/carrito';
import ItemCount from './component/itemCount/ItemCount';
import {BrowserRouter, Route , Routes , Navigate} from 'react-router-dom'
import ItemListContiner from './container/ItemListContainer';


function App() {
  return (  
    <>
  
    {/* <NavBar />
    <Main Bienvenida='Bienvenidos a BeerScript'/>
    <ItemCount stock= {5} initial= {1} /> */}
    <ItemListContiner /> 
   
    
    </>
    
  );
}

export default App; 
  
/* import logo from './logo.svg'; */