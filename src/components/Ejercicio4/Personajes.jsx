import React, { useState, useEffect } from 'react';

function Personajes() {
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        setCargando(true);
        
        setError(null);

       
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
               
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
                return response.json();
            })
            .then(data => {
               
                setPersonajes(data.results);
            })
            .catch(error => {
                
                setError(error.message);
            })
            .finally(() => {
             
                setCargando(false);
            });
    }, []); 

    
    return (
        <div>
            {cargando && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {personajes.map(personaje => (
                    <li key={personaje.id}>
                        <img src={personaje.image} alt={`Imagen de ${personaje.name}`} />
                        <p>{personaje.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Personajes;
