import React from 'react';

function LoginPage() {
    return(
        <div>
            <h1>Login</h1>
            <input placeholder='E-mail' />
            <input placeholder='senha' />
            <button>voltar</button>
            <button>Entrar</button>
        </div>
    )
}

export { LoginPage }