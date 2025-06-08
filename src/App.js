import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import roblox from './imagenes/roblox.png';
import { useState } from 'react';


function App() {

const [clicks, setClicks] = useState (0);

const manejarClick = () =>{
  setClicks(clicks + 1);
};
const reiniciarContador = () =>{
  setClicks(0);
};

  return (
    <div className="App">
<div className='freecodecamp-logo'>
  <img className='fc-logo' src={roblox} alt='logo freecodecamp'></img>
</div>
<div className='contenedor-main'>
  <Contador clicks ={clicks}/>
  <Boton
    texto="click"
    esBotonClick={true}
    manejarClick={manejarClick}
  />
  <Boton
    texto="reiniciar"
    esBotonClick={false}
    manejarClick={reiniciarContador}
  />
</div>
    </div>
  );
}

export default App;
