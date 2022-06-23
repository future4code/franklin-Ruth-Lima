import React, {useState} from "react";
import axios from "axios";


function ListTripsPage() {
    const [viagens, setViagens] = useState([])
axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ruth-lima-franklin/trips').then((response) => {
    setViagens(response.data)
}).catch((error) => {
    console.log(error)
})
    return(
        <div>
            {viagens.map((viagem) => {
                return(<p>{viagem.data}</p>)
            })}
        </div>
    )
}

export { ListTripsPage }