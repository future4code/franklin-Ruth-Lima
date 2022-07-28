import React from "react";
import { useNavigate } from "react-router-dom";

function CreateTripPage() {
    const navigate = useNavigate()

    const voltarParaAdminHomePage = () => {
        navigate('/admin/trips/list')
    }

    return(
        <div>
            <h1>Criar Viagem</h1>
            <form>
                <input placeholder="Nome" />
                <select>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Júpiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>
                    <option>Plutão</option>
                </select>
                <input placeholder="data"/>
                <input placeholder="descrição" textarea=""/>
                <input placeholder="duração em dias"/>
            </form>
                <button>Voltar</button>
                <button onClick={voltarParaAdminHomePage}>Criar</button>
        </div>
    )
}


export { CreateTripPage }