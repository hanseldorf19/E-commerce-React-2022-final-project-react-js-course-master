import React from 'react';
import { useState } from "react";

export const EventsDefault = ()=>{
    
    const [statusForm, setStatusFrom] = useState('');

    const sendForm = (event)=>{
        event.preventDefault();
        console.log('formulario enviado')
        setStatusFrom('Fromulario Enviado ')
    } // el evento submit, por defecto recarga la pagina - por eso neesitamos <h1>{statusForm}</h1>
    

    return(
        <div>
        <form onSubmit={sendForm}>
            <input type='text' placeholder="Nombre"/>
            <button type="submit">Enviar Formulario</button>
            </form>
            <h1>{statusForm}</h1>
            
        </div>
    )
}