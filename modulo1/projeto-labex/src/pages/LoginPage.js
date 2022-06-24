import React from 'react';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate()

    const voltarParaHome = () => {
        navigate('/')
    }

    return(
        <div>
            <h1>Login</h1>
            <input placeholder='E-mail' />
            <input placeholder='senha' />
            <button onClick={voltarParaHome}>voltar</button>
            <button>Entrar</button>
        </div>
    )
}

export { LoginPage }