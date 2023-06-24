import React from 'react'
import { useState } from 'react';

const ANIMAL_IMAGES = {
    img1: "http://via.placeholder.com/111x111",
    img2: "http://via.placeholder.com/222x222",
    img3: "http://via.placeholder.com/333x333",
  };

const CargarImg = () => {

    const [imagenActual, setImagenActual] = useState('');

    const cargarImagen = (imagen) => {
      setImagenActual(ANIMAL_IMAGES[imagen]);
    };
  return (
    <div>
         <h1>Aplicación de Carga de Imágenes</h1>
      <div>
        <button onClick={() => cargarImagen('img1')}>Imagen 1</button>
        <button onClick={() => cargarImagen('img2')}>Imagen 2</button>
        <button onClick={() => cargarImagen('img3')}>Imagen 3</button>
      </div>
      {imagenActual && <img src={imagenActual} alt="Imagen cargada" />}
    </div>
  )
}

export default CargarImg;