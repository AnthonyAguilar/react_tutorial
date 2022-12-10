import './App.css';
import Calculadora from './componentes/Calculadora';
import logo from './imagenes/logo.png'

function App() {
  return (
    <div className="App">      
        <div className='contenedor-logo'>
          <img 
              className='logo'
              src={logo}
              alt='Imagen logo'
          />
        </div>
        <Calculadora></Calculadora>
    </div>
  );
}

export default App;
