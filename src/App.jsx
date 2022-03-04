/* import logo from './logo.svg'; */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navBar/navBar';
import Main from './component/Main/main';
import Carrito from './component/carrito/carrito';


function App() {
  return (  
    <div>
    <NavBar />
    <Main Bienvenida='Bienvenidos a BeerScript'/>
    </div>
    
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