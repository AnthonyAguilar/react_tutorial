import '../hoja-de-estilos/Calculadora.css'

function Calculadora() {


    return(

    <div className='contenedor-calculadora'>
        <div className='contenedor-contador'>
        2
        </div>
        <div className='contenedor-botones'>
          <button className='click' >click</button>
          <button className='restart'>Reiniciar</button>
        </div>
    </div>

    );

}

export default Calculadora;