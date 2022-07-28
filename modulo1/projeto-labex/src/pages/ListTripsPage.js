import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ListTripsPage() {
    const [viagens, setViagens] = useState([])
    const navigate = useNavigate()

    const voltarParaHome = () => {
        navigate('/')
    }

    const irParaFormularioDeAplicacao = () => {
        navigate('/trips/application')
    }

    const verViagens = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ruth-lima-franklin/trips').then((response) => {
            setViagens(response.data.trips)
        }).catch((error) => {
            console.log(error)
        })
    } 
    useEffect(verViagens, [])
   
 
    return(
        <div>
            {viagens.map((viagem) => {
                return(<p key={viagem.id}>{viagem.name}<br/>{viagem.planet}<br/>{viagem.durationInDays}
                <br/>{viagem.date}<br/>{viagem.description}</p>)
                })}
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