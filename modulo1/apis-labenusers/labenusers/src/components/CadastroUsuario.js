import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const CadastroUsuario = () => {

    const [criarName, setCriarName] = useState('')
    const [criarEmail, setCriarEmail] = useState('')


    const salvarUsuario = () => {
       
        const body = {
            name: criarName,
            email: criarEmail
    
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: "ruth-lima-franklin"
            }
            }).then((response) => {
                console.log(response)
            }).catch((erro) => {
                console.log(erro)
        });
    }

    const handleInputName = (event) => {
        setCriarName(event.target.value)
    }

    const handleInputEmail = (event) => {
        setCriarEmail(event.target.value)
    }
    
    useEffect(salvarUsuario, [])

    return(
        <div>
            <p>Faça seu cadastro</p>
            <input value={criarName} onChange={handleInputName} placeholder="nome"/>
            <input value={criarEmail} onChange={handleInputEmail} placeholder="email"/>
            <button onClick={salvarUsuario}>criar usuário</button>
        </div>
    )
}

export { CadastroUsuario }