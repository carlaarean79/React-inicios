import React, { useState } from 'react'
const Conversor = () =>{

    const [conversor, setConversor]= useState(0);
    const [monto, setMonto] = useState('');
    const convertir = (e) => {
        let monto = e.target.value;
        let cotizar = monto / 300;
        setMonto(monto);
        setConversor(cotizar);
        
    }
    
        return (
            <div>
        <input onChange={convertir} type='text' placeholder='Ingrese $' />
        <h1>$ {monto} Equivale a  uSs {conversor}</h1>
    </div>
  )
        }
export default Conversor;