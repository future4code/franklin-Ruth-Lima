import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ListaDeUsuarios = () => {
    const [usuario, setUsuario] = useState([])

    const listaUsuarios = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
            headers: {
                Authorization: "ruth-lima-franklin"
            }
            }).then((response) => {
                setUsuario(response.data)
            }).catch((erro) => {
                console.log(erro.message)
        });
    }
    

    useEffect(listaUsuarios, []);

    return(
        <div>
             {usuario.map((usuario) => {
                 return (
                    <li key={usuario.id}>{usuario.name}</li>)
             })}
            <p>Procurar usuário</p>
            <input placeholder="Nome exato para busca"/>
            <button>buscar</button>
        </div>
    )
}

export { ListaDeUsuarios }