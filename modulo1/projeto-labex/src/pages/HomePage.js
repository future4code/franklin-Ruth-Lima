import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate()

    const irParaViagens = () => {
        navigate('/trips/list')
    }

    const irParaAreaAdmin = () => {
        navigate('/login')
    }

    return(
        <div>
            <h1>LabeX</h1>
            <button onClick={irParaViagens}>Ver Viagens</button>
            <button onClick={irParaAreaAdmin}>Área de Admin</button>
            <img></img>
        </div>
    )
}

export { HomePage }