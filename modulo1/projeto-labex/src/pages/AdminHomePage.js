import React from "react";
import { useNavigate } from 'react-router-dom';


function AdminHomePage() {


    const navigate = useNavigate()

    const voltarParaHomePage = () => {
        navigate('/login')
    }

    const verDetalhesdaViagem = () => {
        navigate('/admin/trips/:id')
    }
    return(
        <div>
            <h1>Painel do Administrador</h1>
            <button onClick={voltarParaHomePage}>Voltar</button>
            <button>Criar Viagem</button>
            <button onClick={verDetalhesdaViagem}>Ver Viagem</button>
            <button>Logout</button>
            
        </div>
    )
}

//chamar o list trip page e acrescentar função de deltar e acessar detalhes

export { AdminHomePage }