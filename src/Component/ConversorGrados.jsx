import React, { useState } from 'react'
//convertir grados C a grados F 
//para ello multiplicar por 9/5 y sumar 32
//fórmula=> (0 °C x 9/5) + 32 = 32 °F
const ConversorGrados = () => {
    const [resultado, setResultado] = useState(0);
    const convertirGrados = (e) => {
        let gradosCentígrados = e.target.value;
        let gradosFarenheit = (gradosCentígrados * 9/5) + 32;
        setResultado(gradosFarenheit);
        if(gradosCentígrados === ""){
            setResultado(0);
        }
    }
  return (

    <div>
        <h4>Ingrese grados centígrados</h4>
        <input type='text' onChange={convertirGrados} />

        <h1>Son {resultado} grados Farenheit</h1>
    </div>
  )
}

export default ConversorGrados