/* import logo from './logo.svg'; */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navBar/navBar';
import Main from './component/Main/main';
import Carrito from './component/carrito/carrito';
import ItemCount from './component/itemCount/ItemCount';
import {BrowserRouter, Route , Routes , Navigate} from 'react-router-dom'


function App() {
  return (  
    <>
  
    <NavBar />
    <Main Bienvenida='Bienvenidos a BeerScript'/>
    <ItemCount stock= {5} initial= {1} />
    
    </>
    
  );
}



export default App;
 

/*   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */