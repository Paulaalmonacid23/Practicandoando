import React, { useState } from 'react'
import Card from './Card';
import { Input } from './FormularioStyled';


const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [validacion, setValidacion] = useState(false);
    const [validacionOk, setValidacionOk] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
       
        let validacionTresCaracteres = false;
        let validacionSeisCaracteres = false;

        if (nombre.trim().length > 3 ) {
            validacionTresCaracteres = true;
            // console.log("Es mayor a 3 caracteres");
        }else{
            validacionTresCaracteres = false;
            // console.log("Es menor a 3 caracteres");
        }

        if (apellido.length >= 6 ) {
            validacionSeisCaracteres = true;
            console.log("Es mayor o igual a 6 caracteres");
        }else{
            validacionSeisCaracteres = false;
            // console.log("Es menor o igual a 6 caracteres");
        }

        if (validacionTresCaracteres === true && validacionSeisCaracteres === true) {
            setValidacionOk(true);
            setValidacion(false);
            // console.log("Renderizar Componente");    
        }else{
            setValidacion(true);
            setValidacionOk(false);
            // console.log("Por favor Chequee que la informacion sea correcta");
        }
      };


    
  return (
    <>
        <form id="login-form" onSubmit={handleSubmit}>
            <span>"Nombre":</span>
            <Input
            type={"text"}
            placeholder={`Ingrese su nombre`}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />


            <span>Apellido</span>
            <Input
            type={"text"}
            placeholder={`Ingrese su apellido`}
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            />
        
        </form>
        <div>
            <button btn="cancel">Cancel</button>
            <button form="login-form" btn="submit">Submit</button>
        </div>

        {
            validacion && (<h2>"Por favor Chequee que la información sea correcta"</h2>)
        }
         {
            validacionOk && (<Card nom={nombre} ape={apellido}/>)
        }
        
        
    </>
  )
}

export default Formulario
