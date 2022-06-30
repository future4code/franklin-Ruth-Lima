import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';



function LoginPage() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleInputSenha = (event) => {
        setSenha(event.target.value)
    }

    const navigate = useNavigate()

    const irParaAdminPage = () => {
        console.log(email, senha);
        const body = {
            email: email,
            password: senha
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ruth-lima-franklin/login', body, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            console.log('deu certo: ', response.data.token);
            localStorage.setItem('token', response.data.token)
        }).catch((error) => {
            console.log('deu erro: ',error)
        })
        navigate('/admin/trips/list')

    }


    return(
        <div>
            <h1>Login</h1>
            <input placeholder='E-mail' value={email} onChange={handleInputEmail}/>
            <input placeholder='senha' value={senha} onChange={handleInputSenha}/>
            <button >voltar</button>
            <button onClick={irParaAdminPage}>Entrar</button>

        </div>
    )
}

export { LoginPage }