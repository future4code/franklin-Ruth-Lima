import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ListTripsPage() {
    const navigate = useNavigate()

    const voltarParaHome = () => {
        navigate('/')
    }

    const irParaFormularioDeAplicacao = () => {
        navigate('/trips/application')
    }
 
    return(
        <div>
            <p>viagens</p>
           <button onClick={voltarParaHome}>voltar</button>
           <button onClick={irParaFormularioDeAplicacao}>inscrever-se</button>
        </div>
    )
}

export { ListTripsPage }

//teste

   /*const [viagens, setViagens] = useState([])
axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ruth-lima-franklin/trips').then((response) => {
    setViagens(response.data)
}).catch((error) => {
    console.log(error)
})*/

// {viagens.map((viagem) => {
    //return(<p>{viagem.data}</p>)
//})}