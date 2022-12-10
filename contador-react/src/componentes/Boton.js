
function Boton({text, isButtonClick, manejarClick}) {
  return(
    <button 
      className={isButtonClick ? 'butoon-click':'butoon-resect'} 
      onClick={manejarClick}>
      {text}
    </button>
  );

}

export default Boton;