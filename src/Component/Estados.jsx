import { useState } from "react";

const Estados =()=>{
    const [nombre, setNombre] = useState("Carla");
 const cambiarNombre = ()=>{
    if(nombre === "Carla"){
        setNombre("Andrea");
    }else {
        setNombre("Carla");
    }
 }
 return(
    <>
    {nombre}
    <hr />
    <button onClick={cambiarNombre}>Cambiar nombre</button>

    </>
    
 )
}
export default Estados;