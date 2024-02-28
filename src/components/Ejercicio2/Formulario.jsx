import React, { useState } from "react";

function Formulario() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMensajeChange = (event) => {
        setMensaje(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nombre:
                    <input type="text" value={nombre} onChange={handleNombreChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
            </div>
            <div>
                <label>
                    Mensaje:
                    <textarea value={mensaje} onChange={handleMensajeChange} />
                </label>
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    );
}

export default Formulario;