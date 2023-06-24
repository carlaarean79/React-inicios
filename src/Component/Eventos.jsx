import React from 'react'

const Eventos = () => {
let nombre ="Carla";
const saludar =(e)=>{

    console.log(e);
    alert("Hola");
}

    return (
    <div>
       
        <button onClick={saludar}>Click</button>
        <p>Me llamo {nombre}</p>
    </div>
  )
}

export default Eventos;
