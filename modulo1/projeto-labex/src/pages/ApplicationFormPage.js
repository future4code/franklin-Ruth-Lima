import React from "react";
import { useNavigate } from 'react-router-dom';


function ApplicationFormPage() {
    const navigate = useNavigate()

    const voltarParaListTrips = () => {
        navigate(-1)
    }
    return(
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <form>
                <label for="">Escolha uma viagem</label><br/><br/>
                <select name="" id="">
                    <option value="">Mulheres são de Vênus</option>
                    <option value="">Astro</option>
                    <option value="">Rolezinho</option>
                    <option value="">Missão saturno</option>
                </select><br/><br/>
                <label for="fnome">Nome</label><br/><br/>
                <input type="texto" id="fnome" name="fnome"/><br/><br/>
                <label for="idade">Idade</label><br/><br/>
                <input type="texto" id="idade" name="idade"/><br/><br/>
                <label for="texto">Texto de candidatura</label><br/><br/>
                <input type="text" id="email" name="email"/><br/><br/>
                <label for="texto">Profissão</label><br/><br/>
                <input type="text" id="profissao" name="profissao"/><br/><br/>
                <label for="texto">Escolha um país</label><br/><br/>
                <select name="país" id="país">
                    <option value="">Brasil</option>
                    <option value="">Espanha</option>
                    <option value="">Inglaterra</option>
                    <option value="">Australia</option>
                </select><br/><br/>
            </form>
            <button onClick={voltarParaListTrips}>voltar</button>
            <button>enviar</button>
        </div>
        
    )
}
//nos paises pode consumir uma API ou criar uma pasta com todos os paises e consumir como um objeto em json
export { ApplicationFormPage }