import React from "react";
import { useNavigate } from 'react';

function AdminHomePage() {
    const navigate = useNavigate()

    const voltarParaHome = () => {
        navigate('/admin/trips/create')
    }
    return(
        <div>
            <h1>Painel do Administrador</h1>
            <button onClick={voltarParaHome}>Voltar</button>
            <button>Criar Viagem</button>
            <button>Logout</button>
            
        </div>
    )
}

//chamar o list trip page e acrescentar função de deltar e acessar detalhes

export { AdminHomePage }