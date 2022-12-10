import './App.css';
import logo from './imagenes/logo.png'
import Boton from './componentes/Boton.js'

function App() {

  const manejarClick = (e) => {
    console.log('click', e);
  }

  const reiniciarContador = (e) => {
    console.log('reiniciar', e);
  }

  return (
    <div className="App">      
        <div className='contenedor-logo'>
          <img 
              className='logo'
              src={logo}
              alt='Imagen logo'
          />
        </div>
        <div className='Contenedor-principal'>
          <Boton
            text='Click'
            isButtonClick={true}
            manejarClick={manejarClick}/>
          <Boton
            text='Reiniciar'
            isButtonClick={false}
            manejarClick={reiniciarContador}/>
        </div>

       {/*  <Calculadora></Calculadora> */}
    </div>
  );
}

export default App;
