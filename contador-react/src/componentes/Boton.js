
function Boton({text, isButtonClick}) {
  return(
    <button className={isButtonClick ? 'butoon-click':'butoon-resect'} >
      {text}
    </button>
  );

}