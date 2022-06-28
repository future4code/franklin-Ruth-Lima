import axios from 'axios';
import React, {useState} from 'react';
//import { useNavigate } from "react-router-dom";


function LoginPage() {
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

const onChangeEmail = (event) => {
    setEmail(event.target.value)
}

const onChangeSenha = (event) => {
    setSenha(event.target.value)
}
//const navigate = useNavigate();

const onSubmitLogin = () => {
    console.log(email, senha);
    const body = {
        "email": email,
        "senha": senha
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ruth-lima-franklin/login', body)
    .then((response) => {
        console.log('deu certo: ', response.data);
        //localStorage.setItem('token', response.data.token);
         //navigate('/admin/trips/list')
    }).catch((error) => {
        console.log('deu erro: ', error)
    });
}

    return(
        <div>
            <h1>Login</h1>
            <input placeholder='email' type="email" value={email} onChange={onChangeEmail}/>
            <input placeholder='senha' type="senha" value={senha} onChange={onChangeSenha}/>
            <button onClick={onSubmitLogin}>enviar</button>
            <button>voltar</button>
        </div>
    )
}

export { LoginPage }