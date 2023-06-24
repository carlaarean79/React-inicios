import React, { useState } from 'react'

const SuperficieRectangulo = () => {
const [rectangulo, setRectangulo] = useState({
    alto : "",
    ancho: ""
});

const [superficie, setSuperficie] = useState(0);
const handlerAncho = (e) =>{
    setRectangulo({
        ...rectangulo,
        ancho: e.target.value
    })
}
const handlerAlto = (e) => {
    setRectangulo({
        ...rectangulo,
        alto: e.target.value
    })
}
const calcularSuperficie = ()=>{
    let resultado = rectangulo.ancho * rectangulo.alto;
    setSuperficie(resultado);
}
 
  return (
    <div>
        <input type='text' onChange={handlerAncho} />
        <input type='text' onChange={handlerAlto} />
        <button onClick={calcularSuperficie} />
        <h1>La superficie del rectángulo es {superficie}</h1>

    </div>
  )
}

export default SuperficieRectangulo;